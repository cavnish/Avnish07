# | Escape Sequence | Meaning                                                        | Example Output                                    |
# | --------------- | -------------------------------------------------------------- | ------------------------------------------------- |
# | `\'`            | Single quote                                                   | `'It\'s OK' → It's OK`                            |
# | `\"`            | Double quote                                                   | `"He said: \"Hello\""` → He said: "Hello"         |
# | `\\`            | Backslash itself                                               | `"C:\\Users\\Admin"` → C:\Users\Admin             |
# | `\n`            | Newline (line break)                                           | `"Hello\nWorld"` → <br>Hello<br>World             |
# | `\t`            | Tab (horizontal space)                                         | `"Hello\tWorld"` → `Hello    World`               |
# | `\r`            | Carriage return (moves cursor to start of line, may overwrite) | `"Hello\rWorld"` → World (Hello overwritten)      |
# | `\b`            | Backspace (deletes previous character in output)               | `"Helloo\b"` → Hello                              |
# | `\f`            | Form feed (new page – mostly in printing)                      | `"Hello\fWorld"` → Hello ␌ World                  |
# | `\v`            | Vertical tab                                                   | `"Hello\vWorld"` → Hello (vertical spacing) World |
# | `\a`            | Bell/alert sound (may beep in terminal if supported)           | `print("\a")` → 🔔                                |
