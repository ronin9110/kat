"use client";

import * as React from "react";
import "../globals.css";
import Link from "next/link";
import Video from "next-video";
import video1 from "@/videos/video1.mp4";
import video2 from "@/videos/video2.mp4";
import pic1 from "@/videos/pic1.jpg";
import cat from "@/videos/cat.gif";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex justify-center pt-14 min-h-screen px-4">
      <Carousel className="w-full max-w-4xl">
        <CarouselContent>
          {/* Slide 1 */}
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center">
                  <div className="w-full flex justify-center">
                    <Image
                      src={pic1}
                      alt="None"
                      height={400}
                      width={800}
                      className="rounded-lg object-contain w-full h-auto max-h-[70vh]"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col text-center">
                  <p>
                    LOOK AT THIS DIVA, ARREST HER, SHE'S THE REASON FOR GIRLS
                    TURNING INTO GAY. HMPH, AND SHE HATES ME COZ SHE HATES TALL
                    GUYS, GREAT ISN'T IT?
                  </p>
                  <p className="font-bold text-rose-500 mt-2">
                    HAPPY BIRTHDAY KAT.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>

          {/* Slide 2 */}
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center">
                  <div className="w-full flex justify-center">
                    <Video
                      src={video1}
                      height={400}
                      width={800}
                      className="rounded-lg object-contain w-full h-auto max-h-[70vh]"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col text-center">
                  <p>
                    i know i know ladies, i bet the ladies love you more
                    hahahah, and here i present you Katrina from the hood.
                  </p>
                  <p className="font-bold text-rose-500 mt-2">
                    And Happy Brithday to Kartina from the Hood. do teach me
                    some kills to rizz up some girls yeah?
                  </p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>

          {/* Slide 3 */}
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center">
                  <div className="w-full flex justify-center">
                    <Video
                      src={video2}
                      height={400}
                      width={800}
                      className="rounded-lg object-contain w-full h-auto max-h-[70vh]"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col text-center">
                  <p>
                    oh ohhh is it not the katrina from the hood ahhh, ITS' NOT
                    FUDGE, IT'S FUCK, EMBRACE YOUR FRENCH OKKAY?????? BTW i
                    would like to borrow that chain and never return it back, can
                    you give me?
                  </p>
                  <p className="font-bold text-rose-500 mt-2">
                    And once again, happy Bithday Kat.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>

          {/* Slide 4 */}
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col text-center items-center justify-center aspect-video">
                  <p className="px-4">
                    I know there's absolutely nothing you saw that you can
                    relate to, and it's absolutely messed up, but this was an
                    idea I had thought for a while. Just the words “I'll do
                    something for you on your bday” got me doing all this.
                  </p>
                  <p className="font-bold text-rose-500 mt-2">
                    AND ONCE AGAIN, BELATED HAPPY BIRTHDAY KAT!!!
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Slide 5 */}
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col text-center aspect-video items-center justify-center">
                  <Image
                    src={cat}
                    alt="Cat sleeping Gif"
                    height={200}
                    width={200}
                    className="object-contain mb-4"
                  />
                  <p>Me after deploying this project... TATAAAAAAAAA 😴</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
