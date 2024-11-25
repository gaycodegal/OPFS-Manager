export async function requestOPFS() {
		return await navigator.storage.getDirectory();
}

export async function touch(root, path) {
		return await root.getFileHandle(path, { create: true });
}

export async function makeADummyFile(handle) {
		console.log(handle);
		const accessHandle = await handle.createWritable();
		const encoder = new TextEncoder();
		const encodedMessage = encoder.encode("hi how are you,\nfriend\n");
		const writeBuffer = await accessHandle.write(encodedMessage);
		// Always close FileSystemSyncAccessHandle if done.
		await accessHandle.close();
}

export async function getObjectURL(handle) {
		return URL.createObjectURL(await handle.getFile());
}

export async function openInElement(element) {
		const root = await requestOPFS();
		const handle = await touch(root, "test.txt");
		await makeADummyFile(handle);
		const href = await getObjectURL(handle);
		console.log(href);
		window.location.href = href;
		element.textContent = "hi";
}
