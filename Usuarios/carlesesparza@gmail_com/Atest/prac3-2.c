#include <stdio.h>

int main () {

    int v1[6] = {1,5,-3,-9,7,-4};   //vector a tratar
    int v2[6] = {0,0,0,0,0,0};      //vector resultado
    int i, suma, avanza;
    suma = avanza = 0;
    
    for (i = 0; i < 6; ++i) //suma todas las posiciones de v1
        suma += v1[i];

    printf ("%d  [OK]\n", suma);
    
    if (suma >= 0) {    //si suma positiva...    
        for (i = 0; i < 6; ++i) {                
                if (v1[i] >= 0)     //busca positivos y los enchufa en v2 
                    v2[avanza] = v1[i];       
            ++avanza;
        }
        for (i = 0; i < 6; ++i) {              
                if (v1[i] < 0) {    //busca negativos y los enchufa en v2
                v2[avanza] = v1[i];       
                ++avanza;
                }
        }
    }
    
    else {          //si suma negativa... 
        for (i = 0; i < 6; ++i) {              
                if (v1[i] < 0) {    //busca negativos y los enchufa en v2 
                v2[avanza] = v1[i];       
                ++avanza;
                }
        }
        for (i = 0; i < 6; ++i) {              
                if (v1[i] >= 0) {   //busca positivos y los enchufa en v2
                v2[avanza] = v1[i];       
                ++avanza;
                }
        }
    }

    for (i = 0; i < 6; ++i) 
        printf ("%d, ", v2[i]);
    
    printf (" [OK]\n");
}
