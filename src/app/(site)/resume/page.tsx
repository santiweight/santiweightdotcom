export default function ResumePage() {
  return (
    <div className="w-full" style={{ height: "calc(100vh - 160px)" }}>
      <embed
        src="/resume.pdf"
        type="application/pdf"
        className="w-full h-full rounded-md"
      />
    </div>
  );
}
