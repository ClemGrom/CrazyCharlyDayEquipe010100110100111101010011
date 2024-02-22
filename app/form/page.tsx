"use client";

import React from "react";
import { Form } from "@/components/component/form";
import { useRouter } from "next/router";

export default function FormPage() {
  const router = useRouter();

  const submitForm = () => {};

  return <Form onClick={submitForm}></Form>;
}
