export default function HomePage() {
  return (
    <>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        Writing dashboard
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
        This central pane now renders pages based on navigation state. Top and
        side buttons route into dedicated screens instead of leaving the layout
        empty.
      </p>
    </>
  );
}
