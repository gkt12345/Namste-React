export const messagesDummy = (len) => {
  let result = "";
  const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const textLength = text.length;
  let count = 0;
  while (count < len) {
    result += text.charAt(Math.floor(Math.random() * textLength));
    count++;
  }
  return result;
};

const names = [
  "Ram",
  "Shyam",
  "Jack",
  "John",
  "Jony",
  "Rahul",
  "Raghav",
  "Vikky",
  "Vishal",
  "Aarav",
  "Saurav",
  "String",
  "Pooja",
  "Priya",
  "Ragini",
  "Gauri",
  "Puspa",
  "Rina",
  "Riya",
  "Soniya",
];

export const randomName = () => {
  return names[Math.floor(Math.random() * names.length)];
};
