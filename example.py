def max_product_cutting_rope(n):
    max_product = [0] * (n + 1)
    print(max_product)

    for i in range(2, n + 1):
        for j in range(1, i // 2 + 1):
            max_product[i] = max(max_product[i], j * max(i - j, max_product[i - j]))
            print(i)
            print(max_product)

    return max_product[n]

# Ejemplo de uso
n = 5  # Longitud de la soga
resultado = max_product_cutting_rope(n)
print(f"El producto máximo alcanzable para una soga de longitud {n} es: {resultado}")
