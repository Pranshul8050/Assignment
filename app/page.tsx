"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Send, Github, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Home Section */}
      <section id="home" className="min-h-screen relative">
        {/* Header */}
        <header className="py-6 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8V16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-wide dark:text-white">ANISH KUMAR SINHA</span>
          </div>

          <nav className="flex items-center gap-10">
            <Link
              href="#home"
              className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
            >
              About
            </Link>
            <Link href="#" className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              Resume
            </Link>
            <Link href="#" className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              Skills
            </Link>
            <Link href="#" className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              Projects
            </Link>
            <Link href="#" className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              Contact
            </Link>
          </nav>

          <button onClick={toggleTheme} className="flex items-center justify-center h-6 w-6 rounded-full">
            <Moon className="h-4 w-4 dark:text-white" />
          </button>
        </header>

        {/* Social Icons */}
        <div className="fixed left-8 top-[55%] -translate-y-1/2 flex flex-col gap-3 z-10">
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Facebook className="h-4 w-4 dark:text-white" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Twitter className="h-4 w-4 dark:text-white" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Instagram className="h-4 w-4 dark:text-white" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Linkedin className="h-4 w-4 dark:text-white" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Send className="h-4 w-4 dark:text-white" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Github className="h-4 w-4 dark:text-white" />
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-between px-32 pt-20">
          <div className="w-1/2">
            <div className="inline-block rounded-full bg-teal-400 px-6 py-2 text-white">Hello!</div>

            <h1 className="mt-6 text-5xl font-bold dark:text-white">
              I&apos;m <span className="text-gray-500 dark:text-gray-300">Anish</span>{" "}
              <span className="text-yellow-400">✨</span>
            </h1>

            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
              UI/UX Designer, Front-End Developer & Thinker.
              <br />
              Based in India.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-600 transition-colors shadow-md">
                Download CV
              </button>
              <button className="rounded-md bg-gray-700 px-6 py-2 text-white hover:bg-gray-800 transition-colors shadow-md">
                Get in Touch!
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 h-[350px] w-[350px] rounded-full bg-yellow-300"></div>
            <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-white dark:border-gray-800">
              <Image
                src="/images/profile.png"
                alt="Anish Kumar Sinha"
                width={350}
                height={350}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen relative">
        {/* Header */}
        <header className="py-6 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8V16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-wide dark:text-white">ANISH KUMAR SINHA</span>
          </div>

          <nav className="flex items-center gap-10">
            <Link
              href="#home"
              className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
            >
              About
            </Link>
            <Link href="#" className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              Resume
            </Link>
            <Link href="#" className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              Skills
            </Link>
            <Link href="#" className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              Projects
            </Link>
            <Link href="#" className="text-xs font-medium hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              Contact
            </Link>
          </nav>

          <button onClick={toggleTheme} className="flex items-center justify-center h-6 w-6 rounded-full">
            <Moon className="h-4 w-4 dark:text-white" />
          </button>
        </header>

        {/* Social Icons for About Section */}
        <div className="fixed left-8 top-[55%] -translate-y-1/2 flex flex-col gap-3 z-50">
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Facebook className="h-4 w-4 dark:text-white" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Twitter className="h-4 w-4 dark:text-white" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Instagram className="h-4 w-4 dark:text-white" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Linkedin className="h-4 w-4 dark:text-white" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Send className="h-4 w-4 dark:text-white" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Github className="h-4 w-4 dark:text-white" />
          </Link>
        </div>

        <div className="flex px-20 pt-10">
          {/* Left side with hand pointing and gray blob */}
          <div className="w-1/3 relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/images/gray-blob.png"
                alt="Gray blob"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative z-10">
              <Image
                src="/images/hand-pointing.png"
                alt="Hand pointing"
                width={300}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right side with content */}
          <div className="w-2/3 pl-10">
            <h2 className="text-4xl font-bold mb-6 dark:text-white">This is it ;)</h2>

            <div className="border-t border-gray-300 w-full mb-6"></div>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-[11px] leading-relaxed">
              <p>
                Anish Kr. Sinha is an Indian <span className="font-medium">UI/UX Designer & Front End Developer</span>{" "}
                with a passion for designing beautiful and functional user experiences. Typically, he's Driven &
                permanently Curious. He's obsessed with designing things and even more obsessed with designing cool &
                clean stuff for the web and mobile. He has been in the business of creating since he hung his first
                painting on the wall when he was 11.
              </p>

              <p>
                He holds a <span className="font-medium">bachelor degree in Computer Applications</span>. During his
                graduation, he has been actively involved in the web design community for the last 3 years. He has
                designed websites for small businesses, events, nonprofits and more. Currently he's based in{" "}
                <span className="font-medium">Bihar, India</span>. Where he's working as an independent creative.
              </p>

              <p>
                His interests, however, extend beyond the web and he loves helping people with branding and print
                design. He even loves designing <span className="font-medium">3D floor plan</span>.
              </p>

              <p>
                When he's not designing, he's probably hanging out with his girlfriend, watching series, sketching or
                messing around on something inspired by YouTube tutorials.
              </p>
            </div>

            <div className="border-t border-gray-300 w-full mt-6"></div>
          </div>
        </div>

        {/* Decorative blobs that don't overlap with text */}
        <div className="relative h-40 mt-10">
          {/* Yellow blob bottom right */}
          <div className="absolute bottom-0 right-0 w-[300px]">
            <Image
              src="/images/yellow-blob.png"
              alt="Yellow blob"
              width={300}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Yellow blob bottom left */}
          <div className="absolute bottom-0 left-[30%] w-[120px]">
            <Image
              src="/images/yellow-blob.png"
              alt="Yellow blob"
              width={120}
              height={120}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Gray blob bottom right */}
          <div className="absolute bottom-0 right-[25%] w-[150px]">
            <Image
              src="/images/gray-blob.png"
              alt="Gray blob"
              width={150}
              height={150}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

