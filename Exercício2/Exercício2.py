# 2) Sistema de Divisão de Gorjetas em Restaurante
import math

amarelo = "\033[33m"
padrao = "\033[0m"
totalGorjeta = 175.89
garcons = 4

print(f"\033[32mDivisão justa das gorjetas entre os {garcons} garçons!\033[0m")
parcelaGarcon = totalGorjeta / garcons
# gera uma tupla -> (decimal, int)
centavos, reais = math.modf(parcelaGarcon)
premiacao = centavos*garcons

print(f'''Cada garçom receberia {amarelo}R${parcelaGarcon:.2f}{padrao}, retirando a parte decimal de cada valor temos um total de {amarelo}{centavos:.2f}{padrao} centavos por funcionário.
O total fica de {amarelo}R${reais:.2f}{padrao} por indivíduo, onde o garçom premiado receberá {amarelo}R${premiacao:.2f}{padrao}.''')



