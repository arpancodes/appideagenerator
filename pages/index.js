import fs from "fs";
import path from "path";
import { useEffect, useState } from "react";
import Head from "next/head";
export default function Home({ apps, professions }) {
  const [randomApp, setRandomApp] = useState("");
  const [randomProfession, setRandomProfession] = useState("");
  const [themeColor, setThemeColor] = useState("red");

  useEffect(() => {
    generate();
    const theme = localStorage.getItem("theme");
    if (theme) setThemeColor(theme);
  }, []);

  const changeTheme = (color) => {
    setThemeColor(color);
    localStorage.setItem("theme", color);
  };

  const generate = () => {
    setRandomProfession(
      professions[Math.floor(Math.random() * (professions.length - 1))]
    );
    setRandomApp(apps[Math.floor(Math.random() * (apps.length - 1))]);
  };
  return (
    <div className={`bg-${themeColor}-100 p-2`}>
      <Head>
        <title>Generate Amazing App Ideas</title>
      </Head>
      <header className="flex justify-between items-center">
        <h1 className={`font-semibold text-4xl text-${themeColor}-500`}>
          App Idea Generator
        </h1>
        <div>
          <button
            onClick={() => changeTheme("red")}
            className="w-5 h-5 bg-red-500 mr-1"
          ></button>
          <button
            onClick={() => changeTheme("blue")}
            className="w-5 h-5 bg-blue-500 mr-1"
          ></button>
          <button
            onClick={() => changeTheme("green")}
            className="w-5 h-5 bg-green-500 mr-1"
          ></button>
          <button
            onClick={() => changeTheme("purple")}
            className="w-5 h-5 bg-purple-500 mr-1"
          ></button>
          <button
            onClick={() => changeTheme("gray")}
            className="w-5 h-5 bg-gray-500 mr-1"
          ></button>
          <button
            onClick={() => changeTheme("yellow")}
            className="w-5 h-5 bg-yellow-500 mr-1"
          ></button>
          <button
            onClick={() => changeTheme("indigo")}
            className="w-5 h-5 bg-indigo-500 mr-1"
          ></button>
          <button
            onClick={() => changeTheme("pink")}
            className="w-5 h-5 bg-pink-500 mr-1"
          ></button>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-5xl capitalize text-center">
          {randomApp && randomProfession
            ? `${randomApp} for ${randomProfession}`
            : ""}
        </p>
        <button
          className={`mt-4 border-2 border-${themeColor}-400 px-6 py-5 text-2xl hover:bg-${themeColor}-200 rounded-md`}
          onClick={generate}
        >
          New App Idea!
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const professions = fs
    .readFileSync(path.join(process.cwd(), "files/profession.txt"), {
      encoding: "utf-8",
      flag: "r",
    })
    .split("\n");

  const apps = fs
    .readFileSync(path.join(process.cwd(), "files/app.txt"), {
      encoding: "utf-8",
      flag: "r",
    })
    .split("\n");
  return {
    props: {
      apps,
      professions,
    },
  };
}
