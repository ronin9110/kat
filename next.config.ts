import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withNextVideo(nextConfig);