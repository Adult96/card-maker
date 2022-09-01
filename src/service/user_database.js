import { getDatabase, ref, onValue, set, remove, off } from 'firebase/database';

class UserDatabase {
  constructor(app) {
    this.db = getDatabase(app);
  }

  setData(userId, info) {
    set(ref(this.db, `${userId}/cards/${info.id}`), info);
  }

  removeData(userId, info) {
    remove(ref(this.db, `${userId}/cards/${info.id}`), info);
  }

  syncData(userId, onUpdate) {
    const Query = ref(this.db, `${userId}/cards`);
    onValue(Query, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off(Query);
  }
}

export default UserDatabase;
