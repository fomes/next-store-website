export function Footer() {
  return (
    <footer className="bg-white w-full border-t-white border-t absolute bottom-0">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy;{new Date().getFullYear()} Fashion Indiscreta, Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
