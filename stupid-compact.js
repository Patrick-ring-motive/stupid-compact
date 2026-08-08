const stupidCompact = messages =>{
  const roles = {};
    for(const message of messages){
      const role = String(message.role);
        roles[role] ??= new Set();
        const shreds = [...new Set(message.content.split(' '))].filter(x=>!roles[role].has(x));
        for(const shred of shreds){
          roles[role].add(shred);
        }
        message.content = shreds.join(' ').trim();
    }
    return messages;
};
