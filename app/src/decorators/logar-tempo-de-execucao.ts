export function logarTempoDeExecucao() {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      // Chama o método original
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`Performace do método ${propertyKey}: ${(t2 - t1) / 10000}s`);   
      retorno;
    }

    return descriptor;
  }
}
