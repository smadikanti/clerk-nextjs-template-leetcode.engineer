import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/components.svg";
import { DownArrow, RightArrow } from "./icons";
import "./home.css";

export default function Home() {
  return (
    <main className="">
      <article className="grid lg:grid-cols-2">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold text-transparent md:text-5xl gradient">
          leetcode.engineer
          </h1>
          {/* <p className="mt-2 text-lg">
            leetcode.engineer
          </p> */}
          <div className="flex gap-2 mt-8">
            <Link
              href="/dashboard"
              className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              Get started
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
            {/* <a
              className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
              href="#features"
            >
              Learn more
              <div className="m-auto">
                <DownArrow />
              </div>
            </a> */}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          {/* <Image src={componentsImg} alt="Clerk embeddable components" /> */}
        </div>
      </article>
      <article
        className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24"
        id="features"
      >
        <h2 className="text-3xl font-semibold">What's under the hood?</h2>
        <p className="mt-2">
          One of the best in class trained llms based on all DSA patterns available online.
          {/* This template repo uses some of the following features provided by
          Clerk. To learn more, read the{" "}
          <a
            href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
            className="font-medium text-primary-600 hover:underline"
          >
            Clerk Docs
          </a> */}
          .
        </p>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Multi Language Support</h3>
            <p className="text-gray-700">
              {/* Prebuilt components to handle essential functionality like user
              sign-in, sign-up, and account management. */}
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/component-reference/overview?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Multi Language Support <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Interactive Chat</h3>
            <p className="text-gray-700">
              {/* Build custom functionality by accessing auth state, user and
              session data, and more with Clerk's React Hooks. */}
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/reference/clerk-react/useuser?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Interactive Chat <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Highly Optimal Solutions</h3>
            <p className="text-gray-700">
              {/* Seamlessly create and switch between organizations, invite and
              manage members, and assign custom roles. */}
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/organizations/overview?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Highly Optimal Solutions <span className="arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

// 'use client';
 
// import { useChat } from 'ai/react';
 
// export default function Chat() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();
//   return (
//     <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
//       {messages.map(m => (
//         <div key={m.id} className="whitespace-pre-wrap">
//           {m.role === 'user' ? 'User: ' : 'AI: '}
//           {m.content}
//         </div>
//       ))}
 
//       <form onSubmit={handleSubmit}>
//         <input
//           className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
//           value={input}
//           placeholder="Say something..."
//           onChange={handleInputChange}
//         />
//       </form>
//     </div>
//   );
// }