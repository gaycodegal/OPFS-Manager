# Easy Filesystem for the Web

The solution this project puts forward is giving users full control over the long term storage of their data by allowing them to save mixed media files from OPFS to their hard drive, and share this data with the website at a future date. This allows websites and users all the benefits of filesystems while still preserving user privacy and security, as the user is always in control.

To achieve these aims, an ideal solution would allow the following:
- Allow users to inspect an OPFS filesystem
- Retrieve and Store files from or to the OPFS filesystem
- Bulk edit operations such as downloading or uploading full directories
- Allow easy management of OPFS files by web applications


## What is OPFS

[Origin Private File System (OPFS)](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system) replaces older solutions like [requestFileSystem](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestFileSystem) which was really only ever a Chrome browser solution to this problem.

### How does OPFS differ from `requestFileSystem`

- OPFS files do not live in a folder advanced users can navigate to and interact with directly.
	- This is due to security concerns.
- Clearing "storage data" clears OPFS files.

Unfortunately these issues combine to make OPFS files rather transient like all website data. This is quite good for privacy, but bad if you really need to be sure user data persists for long periods of time in a way users have full control over. To be fair, the Chrome solution was also subject to similar concerns.

## Other considerations

Pull in https://github.com/jimmywarting/native-file-system-adapter
so that writing files works on Safari.
