const stickStyles = "absolute bottom-0";

function Footer({ stickToBottom }) {
  return (
    <div
      className={`mt-10 flex w-full items-center justify-between bg-slate-400 px-10 py-5 ${
        stickToBottom ? stickStyles : null
      }`}
    >
      <div>
        <p className="text-2xl">React SPA App</p>
        <p className="my-1">Copyright 2023</p>
      </div>
      <a
        href="https://github.com/hellcattc/react-spa-app"
        target="_blank"
        rel="noreferrer"
      >
        <p className="pl-2 text-xl">Github Repository</p>
      </a>
    </div>
  );
}

export default Footer;
