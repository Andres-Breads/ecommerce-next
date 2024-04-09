"use client"
import { Container } from "semantic-ui-react";
import BasicLayout from "./BasicLayout";
import { Home } from "@/components/Home"
import { Separator } from "@/components/Shared";

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastGamePublished />

        <Separator height={100} />

        <Container>
          <Home.LatestGames />
        </Container>
      </BasicLayout>
    </>
  );
}
