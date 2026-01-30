export default function Manuscript() {
  return (
    <>
      <h1 className="text-2xl text-[36px] font-serif px-10 py-8">
        The Meeting
      </h1>
      <textarea
        className="flex-1 w-full text-[20px] p-2 px-10 focus:outline-none font-serif text-lg leading-7 resize-none placeholder:italic"
        placeholder="Begin writing your story..."
      />
    </>
  );
}
