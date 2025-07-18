"use client";
import React from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { useTheme } from "next-themes";

type Props = {};

const UploadCareBtn = (props: Props) => {
  const { theme } = useTheme();

  return (
    <FileUploaderRegular
      sourceList="local, camera, facebook, gdrive"
      classNameUploader={`uc-${theme}`}
      pubkey= {process.env.NEXT_PUBLIC_UPLOAD_CARE_PUB_KEY as string}
    />
  );
};

export default UploadCareBtn;
