"use server";

import { cookies } from "next/headers";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://roots-of-biology-backend.vercel.app";

// মডারেটর রিকোয়েস্টগুলোর ডেটা ফেচ করার জন্য
export async function fetchModeratorRequestsAction() {
  try {
    const cookieStore = await cookies();
    const accessToken = 
      cookieStore.get("accessToken")?.value || 
      cookieStore.get("token")?.value || 
      cookieStore.get("authToken")?.value;

    console.log("🌐 Fetching moderator requests from backend...");

    const res = await fetch(`${BACKEND_URL}/api/users/requests`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
      cache: "no-store",
    });

    const data = await res.json();
    console.log("📦 Backend Response:", data);

    // ১. রেসপন্স সফল না হলে এম্পটি অ্যারে রিটার্ন করা
    if (!res.ok) {
      console.error("❌ Failed to fetch requests, status:", res.status);
      return [];
    }

    // ২. ডেটা ফরম্যাট সেফলি হ্যান্ডেল করা (Array চেক)
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.data?.result)) return data.data.result;

    return [];
  } catch (error) {
    console.error("❌ Error fetching moderator requests:", error);
    return [];
  }
}

// মডারেটর রিকোয়েস্ট Approve বা Reject করার জন্য
export async function updateRequestStatusAction(id: string, status: string) {
  try {
    const cookieStore = await cookies();
    const accessToken = 
      cookieStore.get("accessToken")?.value || 
      cookieStore.get("token")?.value || 
      cookieStore.get("authToken")?.value;

    if (!accessToken) {
      return { success: false, message: "Unauthenticated! Please login again." };
    }

    const res = await fetch(`${BACKEND_URL}/api/users/request-status/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ status }),
    });

    const data = await res.json();
    if (res.ok && (data.success || res.status === 200)) {
      return { success: true, message: data.message || "Status updated successfully" };
    }
    return { success: false, message: data.message || "Failed to update status" };
  } catch (error) {
    console.error("❌ Error updating status:", error);
    return { success: false, message: "Something went wrong" };
  }
}