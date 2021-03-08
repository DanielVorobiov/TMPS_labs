class Singleton {
  private static instance: Singleton = new Singleton();
  private constructor() {}

  public static getInstance(): Singleton {
    return Singleton.instance;
  }
}

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 == s2) {
    console.log("Evrika");
  } else {
    console.log("Evrika.....not.");
  }
}

clientCode();
