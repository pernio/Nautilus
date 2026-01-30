export default function Manuscript() {
  return (
    <>
      <h1 className="text-2xl font-bold font-manuscript">Manuscript</h1>
      <textarea
        className="w-full h-[80vh] mt-4 p-2 focus:outline-none font-manuscript text-lg leading-7"
        placeholder="Start writing your manuscript here..."
      />
    </>
  );
}
