import { en } from "@messageformat/runtime/lib/cardinals";
import { plural } from "@messageformat/runtime";
export default {
  C67559323D0BC64870: () => "Login en",
  "45D3A467ED52854ED7": (d) => "Hello " + d.user + " en",
  "81FC89B8B26CC39509": () => "root en",
  "4CE1E71B36413F5A6D": () => "throw en",
  "6FA6B1868756D33236": () => "login en",
  "2C8B7D3B6E098AC492": () => "Go to home page en",
  F7B1290288762F0DA8: () => "Bar en",
  "1486A322F9A4519C20": (d) => "Hello " + plural(d.p, 0, en, { one: "one", other: "two" }) + " en",
  "56E0B5E8E0D47871F8": (d) => "Login " + d.user + " en",
  D5B96A08C623649E35: () => "Go to about page en",
  "33D17BC3D43F87F984": () => "foo tButton en",
  A614CC79EAF053E4E0: () => "foo en"
}