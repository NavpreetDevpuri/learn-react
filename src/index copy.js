import React from "react";
import ReactDOM from "react-dom";
import LearnClass from "./components/LearnClass";

// class Garage extends React.Component {
//     render() {
//         const carinfo = { name: "Ford", model: "Mustang" };
//         return (
//             <div>
//                 <h1>Learn Reactjs?</h1>
//                 <LearnClass brand={carinfo} color="prop color" />
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Garage />, document.getElementById("root"));

import SyntaxHighlighter from "react-syntax-highlighter";
import {
    a11yDark,
    agate,
    a11yLight,
    anOldHope,
    androidstudio,
    arduinoLight,
    arta,
    ascetic,
    atelierCaveDark,
    atelierCaveLight,
    atelierDuneDark,
    atelierDuneLight,
    atelierEstuaryDark,
    atelierEstuaryLight,
    atelierForestDark,
    atelierForestLight,
    atelierHeathDark,
    atelierHeathLight,
    atelierLakesideDark,
    atelierLakesideLight,
    atelierPlateauDark,
    atelierPlateauLight,
    atelierSavannaDark,
    atelierSavannaLight,
    atelierSeasideDark,
    atelierSeasideLight,
    atelierSulphurpoolDark,
    atelierSulphurpoolLight,
    atomOneDarkReasonable,
    atomOneDark,
    atomOneLight,
    brownPaper,
    codepenEmbed,
    colorBrewer,
    darcula,
    dark,
    defaultStyle,
    docco,
    dracula,
    far,
    foundation,
    githubGist,
    github,
    gml,
    googlecode,
    gradientDark,
    grayscale,
    gruvboxDark,
    gruvboxLight,
    hopscotch,
    hybrid,
    idea,
    irBlack,
    isblEditorDark,
    isblEditorLight,
    kimbieDark,
    kimbieLight,
    lightfair,
    lioshi,
    magula,
    monoBlue,
    monokaiSublime,
    monokai,
    nightOwl,
    nnfxDark,
    nnfx,
    nord,
    obsidian,
    ocean,
    paraisoDark,
    paraisoLight,
    pojoaque,
    purebasic,
    qtcreatorDark,
    qtcreatorLight,
    railscasts,
    rainbow,
    routeros,
    schoolBook,
    shadesOfPurple,
    solarizedDark,
    solarizedLight,
    srcery,
    sunburst,
    tomorrowNightBlue,
    tomorrowNightBright,
    tomorrowNightEighties,
    tomorrowNight,
    tomorrow,
    vs,
    vs2015,
    xcode,
    xt256,
    zenburn,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
const Component = () => {
    const codeString = `
    import SyntaxHighlighter from "react-syntax-highlighter";
    import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
    const Component = () => {
        const codeString = "(num) => num + 1";
        return (
            <SyntaxHighlighter language="javascript" style={docco}>
                {codeString}
            </SyntaxHighlighter>
        );
    };`;
    var list = [
        { value: a11yDark, name: "a11yDark" },
        { value: agate, name: "agate" },
        { value: a11yLight, name: "a11yLight" },
        { value: anOldHope, name: "anOldHope" },
        { value: androidstudio, name: "androidstudio" },
        { value: arduinoLight, name: "arduinoLight" },
        { value: arta, name: "arta" },
        { value: ascetic, name: "ascetic" },
        { value: atelierCaveDark, name: "atelierCaveDark" },
        { value: atelierCaveLight, name: "atelierCaveLight" },
        { value: atelierDuneDark, name: "atelierDuneDark" },
        { value: atelierDuneLight, name: "atelierDuneLight" },
        { value: atelierEstuaryDark, name: "atelierEstuaryDark" },
        { value: atelierEstuaryLight, name: "atelierEstuaryLight" },
        { value: atelierForestDark, name: "atelierForestDark" },
        { value: atelierForestLight, name: "atelierForestLight" },
        { value: atelierHeathDark, name: "atelierHeathDark" },
        { value: atelierHeathLight, name: "atelierHeathLight" },
        { value: atelierLakesideDark, name: "atelierLakesideDark" },
        { value: atelierLakesideLight, name: "atelierLakesideLight" },
        { value: atelierPlateauDark, name: "atelierPlateauDark" },
        { value: atelierPlateauLight, name: "atelierPlateauLight" },
        { value: atelierSavannaDark, name: "atelierSavannaDark" },
        { value: atelierSavannaLight, name: "atelierSavannaLight" },
        { value: atelierSeasideDark, name: "atelierSeasideDark" },
        { value: atelierSeasideLight, name: "atelierSeasideLight" },
        { value: atelierSulphurpoolDark, name: "atelierSulphurpoolDark" },
        { value: atelierSulphurpoolLight, name: "atelierSulphurpoolLight" },
        { value: atomOneDarkReasonable, name: "atomOneDarkReasonable" },
        { value: atomOneDark, name: "atomOneDark" },
        { value: atomOneLight, name: "atomOneLight" },
        { value: brownPaper, name: "brownPaper" },
        { value: codepenEmbed, name: "codepenEmbed" },
        { value: colorBrewer, name: "colorBrewer" },
        { value: darcula, name: "darcula" },
        { value: dark, name: "dark" },
        { value: defaultStyle, name: "defaultStyle" },
        { value: docco, name: "docco" },
        { value: dracula, name: "dracula" },
        { value: far, name: "far" },
        { value: foundation, name: "foundation" },
        { value: githubGist, name: "githubGist" },
        { value: github, name: "github" },
        { value: gml, name: "gml" },
        { value: googlecode, name: "googlecode" },
        { value: gradientDark, name: "gradientDark" },
        { value: grayscale, name: "grayscale" },
        { value: gruvboxDark, name: "gruvboxDark" },
        { value: gruvboxLight, name: "gruvboxLight" },
        { value: hopscotch, name: "hopscotch" },
        { value: hybrid, name: "hybrid" },
        { value: idea, name: "idea" },
        { value: irBlack, name: "irBlack" },
        { value: isblEditorDark, name: "isblEditorDark" },
        { value: isblEditorLight, name: "isblEditorLight" },
        { value: kimbieDark, name: "kimbieDark" },
        { value: kimbieLight, name: "kimbieLight" },
        { value: lightfair, name: "lightfair" },
        { value: lioshi, name: "lioshi" },
        { value: magula, name: "magula" },
        { value: monoBlue, name: "monoBlue" },
        { value: monokaiSublime, name: "monokaiSublime" },
        { value: monokai, name: "monokai" },
        { value: nightOwl, name: "nightOwl" },
        { value: nnfxDark, name: "nnfxDark" },
        { value: nnfx, name: "nnfx" },
        { value: nord, name: "nord" },
        { value: obsidian, name: "obsidian" },
        { value: ocean, name: "ocean" },
        { value: paraisoDark, name: "paraisoDark" },
        { value: paraisoLight, name: "paraisoLight" },
        { value: pojoaque, name: "pojoaque" },
        { value: purebasic, name: "purebasic" },
        { value: qtcreatorDark, name: "qtcreatorDark" },
        { value: qtcreatorLight, name: "qtcreatorLight" },
        { value: railscasts, name: "railscasts" },
        { value: rainbow, name: "rainbow" },
        { value: routeros, name: "routeros" },
        { value: schoolBook, name: "schoolBook" },
        { value: shadesOfPurple, name: "shadesOfPurple" },
        { value: solarizedDark, name: "solarizedDark" },
        { value: solarizedLight, name: "solarizedLight" },
        { value: srcery, name: "srcery" },
        { value: sunburst, name: "sunburst" },
        { value: tomorrowNightBlue, name: "tomorrowNightBlue" },
        { value: tomorrowNightBright, name: "tomorrowNightBright" },
        { value: tomorrowNightEighties, name: "tomorrowNightEighties" },
        { value: tomorrowNight, name: "tomorrowNight" },
        { value: tomorrow, name: "tomorrow" },
        { value: vs, name: "vs" },
        { value: vs2015, name: "vs2015" },
        { value: xcode, name: "xcode" },
        { value: xt256, name: "xt256" },
        { value: zenburn, name: "zenburn" },
    ];
    return list.map((e) => {
        return (
            <div>
                <h2>{e.name}</h2>
                <SyntaxHighlighter language="javascript" style={e.value}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        );
    });
};

ReactDOM.render(<Component />, document.getElementById("root"));
