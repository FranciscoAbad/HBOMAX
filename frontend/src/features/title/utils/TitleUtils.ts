export function formatName(input: string) {
  const [firstName, lastName] = input.split("-");

  // Capitalize the first letter of each name
  const formattedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const formattedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);

  // Join the names with a blank space
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
  // Dividir la cadena en palabras usando guiones como delimitadores
  const strings = input.split("-");

  const upperCaseStrings = strings.map((item) => {
    // Asegurar que la palabra no esté vacía
    if (item.length > 0) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    } else {
      return "";
    }
  });

  // Unir las palabras capitalizadas en una cadena
  const newString = upperCaseStrings.join(" ");

  return newString;
}
