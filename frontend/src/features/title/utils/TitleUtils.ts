export function formatName(input: string) {
  const [firstName, lastName] = input.split("-");

  const formattedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const formattedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);

  const formattedName = `${formattedFirstName} ${formattedLastName}`;

  return formattedName;
}

export function firstLetterToUpperCase(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function removeSlashAndAllToUpperCase(input: string) {
  let string = input.replace(/-/g, " ");

  return string.toUpperCase();
}

export function firstLettesToUpperCaseAndReplace(input: string) {
  if (input.includes("-")) {
    const strings = input.split("-");

    const upperCaseStrings = strings.map((item) => {
      if (item.length > 0) {
        return item.charAt(0).toUpperCase() + item.slice(1);
      } else {
        return "";
      }
    });

    const newString = upperCaseStrings.join(" ");

    return newString;
  } else {
    return firstLetterToUpperCase(input);
  }
}

export function getYear(dateString: string): number {
  return parseInt(dateString.split("-")[0], 10);
}

export function replacePipesWithSpaces(text: string): string {
  return text.replace(/\|/g, " ");
}
export function optimizeCloudinaryUrl(url: string): string {
  if (!url.includes("res.cloudinary.com")) return url;

  const parts = url.split("/upload/");
  if (parts.length !== 2) return url;

  return `${parts[0]}/upload/w_auto,dpr_auto,q_auto,f_auto/${parts[1]}`;
}
