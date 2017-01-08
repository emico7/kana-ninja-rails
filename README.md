# Kana Ninja

* Rails version 5.0.1

* Ruby version 2.3.0

**Notes for Admin**

- When creating a new question, the audio file name shouldn't include its file path, just a file name and an extension. Otherwise audio file doesn't get generated correctly. Good examples => ("house.m4a", "heart.m4a") Bad examples => ("assets/audio/house.m4a", "house")
