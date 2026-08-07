"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "../_action/authAction";
import { toast } from "sonner";
import {
  Loader2,
  Eye,
  EyeOff,
  Dna,
  Phone,
  ShieldCheck,
  ShieldAlert,
  GraduationCap,
  User,
  KeyRound,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ডেমো ক্রেডেনশিয়ালের ডাটা
const DEMO_CREDENTIALS = [
  {
    role: "Admin",
    phone: "01339613196",
    pass: "12345678",
    icon: ShieldCheck,
    badgeColor: "text-red-600 bg-red-500/10 border-red-500/30 hover:bg-red-500/20 dark:text-red-400",
  },
  {
    role: "Moderator",
    phone: "01339613197",
    pass: "123456",
    icon: ShieldAlert,
    badgeColor: "text-amber-600 bg-amber-500/10 border-amber-500/30 hover:bg-amber-500/20 dark:text-amber-400",
  },
  {
    role: "Student",
    phone: "01339613198",
    pass: "12345678",
    icon: GraduationCap,
    badgeColor: "text-emerald-600 bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20 dark:text-emerald-400",
  },
  {
    role: "User",
    phone: "01339613199",
    pass: "123456",
    icon: User,
    badgeColor: "text-cyan-600 bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20 dark:text-cyan-400",
  },
];

export default function LoginForm() {
  const router = useRouter();
  const [state, action, pending] = useActionState(loginAction, null);
  const [showPassword, setShowPassword] = useState(false);

  // অটো-ফিলের জন্য State
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!state) return;

    if (state.success === false) {
      const errorMsg = state.message ? state.message.toLowerCase() : "";

      if (
        errorMsg.includes("not found") ||
        errorMsg.includes("does not exist") ||
        errorMsg.includes("invalid") ||
        errorMsg.includes("wrong") ||
        errorMsg.includes("match")
      ) {
        toast.error("অ্যাকাউন্ট পাওয়া যায়নি বা পাসওয়ার্ড ভুল! দয়া করে আগে রেজিস্টার করুন।");
      } else {
        toast.error(state.message || "Login failed");
      }
    } else if (state.success === true) {
      toast.success("Welcome back to Amader Pathshala!");
    }
  }, [state]);

  // ক্রেডেনশিয়াল ফিল করার ফাংশন
  const handleQuickFill = (demoPhone: string, demoPass: string, roleName: string) => {
    setPhone(demoPhone);
    setPassword(demoPass);
    toast.info(`${roleName} ডেমো ক্রেডেনশিয়াল ফিল করা হয়েছে!`);
  };

  return (
    <div className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden p-4 md:p-8">
      {/* Ambient Biology Theme Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-emerald-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-cyan-500/20 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="relative w-full max-w-md"
      >
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-white/70 shadow-[0_8px_32px_rgba(16,185,129,0.1)] backdrop-blur-xl dark:bg-slate-950/70 dark:shadow-[0_8px_32px_rgba(16,185,129,0.05)]">
          
          {/* Back Button */}
          <button
            type="button"
            onClick={() => router.back()}
            className="absolute left-4 top-4 flex items-center gap-1.5 rounded-lg border border-slate-200/60 bg-white/50 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 active:scale-95 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>

          <div className="space-y-2 p-8 pb-4 pt-10 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 shadow-inner dark:bg-emerald-900/50"
            >
              <Dna className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </motion.div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Welcome back
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Enter your phone number and password to login
            </p>
          </div>

          <form action={action} className="space-y-6 p-8 pt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 dark:text-slate-300">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={pending}
                    className="pl-10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-500/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">
                    Password
                  </Label>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={pending}
                    className="pr-10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-500/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-emerald-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Demo Credentials Section */}
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-3.5 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <KeyRound className="h-3.5 w-3.5 text-emerald-500" />
                <span>Demo Quick Fill (Click to test)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {DEMO_CREDENTIALS.map((cred) => {
                  const Icon = cred.icon;
                  return (
                    <button
                      key={cred.role}
                      type="button"
                      disabled={pending}
                      onClick={() => handleQuickFill(cred.phone, cred.pass, cred.role)}
                      className={`flex items-center justify-between rounded-lg border p-2 text-left text-xs font-medium transition-all duration-200 active:scale-95 ${cred.badgeColor}`}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <Icon className="h-3.5 w-3.5 shrink-0" />
                        {cred.role}
                      </span>
                      <span className="text-[10px] opacity-70">Fill</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <Button
              type="submit"
              className="group w-full bg-emerald-600 transition-all duration-300 hover:bg-emerald-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] dark:bg-emerald-600 dark:hover:bg-emerald-500"
              disabled={pending}
            >
              {pending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Logging in...
                </>
              ) : (
                <span className="flex items-center justify-center text-base">
                  Login to Pathshala
                  <motion.span
                    className="ml-2 inline-block opacity-0 transition-opacity group-hover:opacity-100"
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                  >
                    →
                  </motion.span>
                </span>
              )}
            </Button>

            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              Don&apos;t have an account?{" "}
              <a
                href="/register"
                className="font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}