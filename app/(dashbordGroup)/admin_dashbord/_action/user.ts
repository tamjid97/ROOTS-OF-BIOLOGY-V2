"use server";

import { cookies } from "next/headers";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://roots-of-biology-backend.vercel.app";

// সমস্ত ইউজার ফেচ করার জন্য
export async function fetchAllUsersAction() {
  try {
    const cookieStore = await cookies();
    const accessToken = 
      cookieStore.get("accessToken")?.value || 
      cookieStore.get("token")?.value || 
      cookieStore.get("authToken")?.value;

    // ১. টোকেন না থাকলে সাথে সাথে লগ দেয়া
    if (!accessToken) {
      console.error("❌ Authorization token missing in cookies!");
      return [];
    }

    // ব্যাকএন্ডের সঠিক এন্ডপয়েন্ট চেক কর (যেমন: /api/users অথবা /api/admin/users)
    const res = await fetch(`${BACKEND_URL}/api/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    const data = await res.json();

    // ২. যদি ব্যাকএন্ড থেকে ২০০/২০১ স্ট্যাটাস না আসে
    if (!res.ok) {
      console.error("❌ Backend Fetch Failed Status:", res.status, data);
      return [];
    }

    // ৩. ব্যাকএন্ড ডাটার স্ট্রাকচার অনুযায়ী সেফলি রিটার্ন করা
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.data?.result)) return data.data.result;

    return [];
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return [];
  }
}

// ইউজারের স্ট্যাটাস আপডেট করার জন্য
export async function updateUserStatusAction(id: string, status: string) {
  try {
    const cookieStore = await cookies();
    const accessToken = 
      cookieStore.get("accessToken")?.value || 
      cookieStore.get("token")?.value || 
      cookieStore.get("authToken")?.value;

    if (!accessToken) {
      return { success: false, message: "Unauthenticated! Please login again." };
    }

    const res = await fetch(`${BACKEND_URL}/api/users/ban/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ status }),
    });

    const data = await res.json();

    if (res.ok && (data.success || res.status === 200)) {
      return { success: true, message: data.message || "User status updated successfully" };
    }
    return { success: false, message: data.message || "Failed to update user status" };
  } catch (error) {
    console.error("❌ Error updating user status:", error);
    return { success: false, message: "Something went wrong" };
  }
}