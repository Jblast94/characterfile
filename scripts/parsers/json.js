export const parseJson = (content, targetUser = null) => {
    let rawData;
    try {
        rawData = JSON.parse(content);
    } catch (e) {
        return { messages: [], users: [] };
    }

    if (!Array.isArray(rawData)) {
        return { messages: [], users: [] };
    }

    const messages = [];
    const foundUsers = new Set();

    rawData.forEach(item => {
        // Assume format: { user: string, message: string, timestamp: string }
        if (!item.user || !item.message) return;

        foundUsers.add(item.user.trim());

        if (!targetUser || item.user.trim().toLowerCase() === targetUser.trim().toLowerCase()) {
            messages.push({
                timestamp: item.timestamp || new Date().toISOString(),
                user: item.user.trim(),
                message: item.message.trim()
            });
        }
    });

    return {
        messages,
        users: Array.from(foundUsers)
    };
};
