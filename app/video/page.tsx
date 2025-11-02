import Link from "next/link";
import Video from "next-video";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import video3 from "@/videos/video3.mp4";

export default function VideoPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-background px-4 py-10">
      <Card className="w-full max-w-3xl shadow-xs text-white">

        <CardHeader>
          <CardTitle className="text-center text-2xl sm:text-3xl font-semibold">
            play. the. video. hmph.
          </CardTitle>
        </CardHeader>

        <CardContent className="flex justify-center">
          <div className="w-full">
            <Video
              src={video3}
              className="w-full rounded-lg"
              style={{
                aspectRatio: "16 / 9",
                height: "auto",
              }}
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-red-500 text-center sm:text-left">
            HAPPY BIRTHDAY <span className="font-bold">*IN ANGRY FACE*</span>
          </p>

          <Button asChild variant="link" className="text-blue-500">
            <Link href="/gallery">Next Page →</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
