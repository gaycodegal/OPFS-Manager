let libOPFS = import("./lib-opfs-manager.js");


class LibOPFSManager {
		static async openInElement(element) {
				return (await libOPFS).openInElement(element);
		}
};
