# Kana Ninja

* Rails version 5.0.1

* Ruby version 2.3.0

When creating a new question, the audio file name shouldn't include a file path, just file name and an extension. Otherwise audio file doesn't get generated correctly. Good examples ("house.m4a", "heart.m4a") Bad examples ("assets/audio/house.m4a", "house")
