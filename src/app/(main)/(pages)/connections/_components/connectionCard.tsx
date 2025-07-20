import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
  type: string;
};

const ConnectionCard = ({ icon, title, description }: Props) => {
  return (
    <Card className="mx-10 h-28 flex items-center">
      <CardHeader className="flex flex-row items-center w-full gap-4">
        <div className="flex items-center justify-center mr-4">
          <Image
            src={icon}
            alt={title}
            height={30}
            width={30}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col flex-1">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div>
          <Link
            href={
              title === "Discord"
                ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT || "#"
                : title === "Notion"
                ? process.env.NEXT_PUBLIC_NOTION_REDIRECT || "#"
                : title === "Slack"
                ? process.env.NEXT_PUBLIC_SLACK_REDIRECT || "#"
                : "#"
            }
            className="rounded-lg bg-primary p-2 font-bold text-primary-foreground"
          >
            Connect
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ConnectionCard;
