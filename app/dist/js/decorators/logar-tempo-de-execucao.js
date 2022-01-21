export function logarTempoDeExecucao() {
    return (target, propertyKey, descriptor) => {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Performace do método ${propertyKey}: ${(t2 - t1) / 10000}s`);
            retorno;
        };
        return descriptor;
    };
}
