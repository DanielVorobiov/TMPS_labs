class Prototype {
  public nume: any;
  public data: object;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.data = Object.create(this.data);
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };
    return clone;
  }
}

class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

function clientCode() {
  const p1 = new Prototype();
  p1.nume = 245;
  p1.data = new Date();
  p1.circularReference = new ComponentWithBackReference(p1);

  const p2 = p1.clone();
  if (p1.nume === p2.nume) {
    console.log("Yes");
  } else {
    console.log("no");
  }
  if (p1.data === p2.data) {
    console.log("yes");
  } else {
    console.log("no");
  }

  if (p1.circularReference === p2.circularReference) {
    console.log("Yes");
  } else {
    console.log("no");
  }

  if (p1.circularReference.prototype === p2.circularReference.prototype) {
    console.log("Yes");
  } else {
    console.log("no");
  }
}

clientCode();
