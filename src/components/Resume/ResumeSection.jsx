export default function ResumeSection({
  text,
  title,
}) {
  return (
    <div className="mb-12">
      <h2 className="mb-4">{title}</h2>
      <p>{text}</p>
    </div>
  );
}
