"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function FacultyPage() {
    return (
        <div className="bg-black h-screen">
            <Link
                href="/"
                className="absolute top-4 left-4 bg-white text-black p-4 rounded"
            >
                <ChevronLeft className="" />
            </Link>
        </div>
    )
}