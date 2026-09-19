const stupidCompact = messages => {
  messages = messages.toReversed();
  const roles = {};
  for (const message of messages) {
    try{
      const role = String(message.role);
      if (role === 'system') continue;
      roles[role] ??= new Set();
      const shreds = [...new Set(message.content.split(' '))].filter(x => !roles[role].has(x));
      for (const shred of shreds) {
        roles[role].add(shred);
      }
      message.content = shreds.join(' ').trim();
    }catch{}
  }
  return messages.reverse();
};
