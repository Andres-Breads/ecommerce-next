"use client"
import "semantic-ui-css/semantic.min.css";

export default function LayoutStyles({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  )
}
