
export const parseWhatsApp = (content, targetUser = null) => {
    const lines = content.split('\n');
    const messages = [];
    const foundUsers = new Set();
    // WhatsApp format: [timestamp] Username: message
    const messageRegex = /\[(.*?)\] (.*?):(.*)/;

    lines.forEach(line => {
        const match = line.match(messageRegex);
        if (match) {
            const [, timestamp, user, message] = match;
            const userName = user.trim();
            foundUsers.add(userName);

            // Skip media messages, deleted messages and message edits
            if (message.includes('image omitted') ||
                message.includes('sticker omitted') ||
                message.includes('audio omitted') ||
                message.includes('video omitted') ||
                message.includes('document omitted') ||
                message.includes('This message was deleted') ||
                message.includes('This message was edited')) {
                return;
            }

            // If targetUser is provided, filter by it. Otherwise include all.
            if (!targetUser || userName.toLowerCase() === targetUser.trim().toLowerCase()) {
                messages.push({
                    timestamp,
                    user: userName,
                    message: message.trim(),
                });
            }
        }
    });

    return {
        messages,
        users: Array.from(foundUsers)
    };
};
