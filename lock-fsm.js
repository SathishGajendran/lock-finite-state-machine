class LockFSM {
  constructor() {
    console.log('Lock Finite State Machine');
  }

  state = null;

  key = () => {
    this.state.key(this);
  };

  enter = () => {
    this.state.enter(this);
  };

  _unlock = () => {
    console.log('Door Unlocked, You can go inside the home');
  };
  _lock = () => {
    console.log('Door Locked after getting inside the home');
  };
  _triggerAlarm = () => {
    console.log('Warning: You can\'t enter the locked door !!!. Give key');
  };
  _sayItIsOpen = () => {
    console.log('Door is open already');
  };
}

const lockedState = {
  key: fsm => {
    fsm._unlock();
    fsm.state = unlockedState;
  },
  enter: fsm => {
    fsm._triggerAlarm();
    fsm.state = lockedState;
  },
};

const unlockedState = {
  key: fsm => {
    fsm._sayItIsOpen();
    fsm.state = unlockedState;
  },
  enter: fsm => {
    fsm._lock();
    fsm.state = lockedState;
  },
};

const enableLock = fsm => {
  console.log('Lock System On');
  fsm.state = lockedState;
};

const disableLock = fsm => {
  console.log('Lock System Off');
  fsm.state = null;
};

const doorLock = new LockFSM();
//Lock Finite State Machine

enableLock(doorLock);
//Lock System On

doorLock.key();
//Door Unlocked, You can go inside the home

doorLock.key();
//Door is open already

doorLock.enter();
//Door Locked after getting inside the home

doorLock.enter();
//Warning: You can't enter the locked door !!!. Give key

doorLock.enter();
//Warning: You can't enter the locked door !!!. Give key

doorLock.key();
//Door Unlocked, You can go inside the home

doorLock.key();
//Door is open already

doorLock.enter();
//Door Locked after getting inside the home

disableLock(doorLock);
//Lock System Off
