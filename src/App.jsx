import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BoxIcon,
  HandIcon,
  Menu,
  Recycle,
  RecycleIcon,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <a className="flex items-center justify-center" href="#">
          <Recycle className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-semibold text-primary hidden sm:inline">
            3rEco
          </span>
        </a>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#introduction"
          >
            Introduction
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#what-recyclables"
          >
            What recyclables?
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#get-started"
          >
            Get Started
          </a>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </header>
      {isMenuOpen && (
        <nav className="flex flex-col items-center gap-4 py-4 bg-white md:hidden">
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#introduction"
          >
            Introduction
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#what-recyclables"
          >
            What recyclables?
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#get-started"
          >
            Get Started
          </a>
        </nav>
      )}
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/5"
          id="introduction"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Responsible Waste Management Made Easy
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join us in creating a sustainable future. Track your collections
                and transactions with ease.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#get-started">
                <Button size="lg">Get Started</Button>
              </a>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          id="services"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: BoxIcon,
                  title: "Convenient Product Capture",
                  description:
                    "Capture your products from a pre-defined list with your own pricing.",
                },
                {
                  icon: HandIcon,
                  title: "Easy Collector Registration",
                  description:
                    "Capture your collectors with their details easily.",
                },
                {
                  icon: TruckIcon,
                  title: "Efficient Collection Capture",
                  description:
                    "Efficiently capture your collections with their products, collectors as well as their weight.",
                },
              ].map((service, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-col items-center justify-center w-full">
                    <service.icon className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-primary/5"
          id="what-recyclables"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Types of Waste We Collect
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Electronic Waste",
                "Packaging Materials",
                "Batteries",
                "Appliances",
                "Plastics",
                "Metals",
              ].map((waste) => (
                <div
                  key={waste}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
                >
                  <RecycleIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg font-medium">{waste}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          id="get-started"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Make a Difference?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Provide your email address and we will contact you to get you
                set up with 3rEco.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  className="flex-1"
                  placeholder="Enter your email address"
                  type="text"
                />
                <Button type="submit">Schedule</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Use-IT & Kalimbu. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
