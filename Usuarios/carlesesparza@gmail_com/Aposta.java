/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Loteria;

/**
 *
 * @author esparza
 */
public class Aposta {
    private String nom;
    private int aposta;
    
    Aposta(String nom,int aposta)
    {
        this.aposta = aposta;
        this.nom = nom; 
    }

    public String getNom() {
        return nom;
    }

    public int getAposta() {
        return aposta;
    }

    public void setAposta(int aposta) {
        this.aposta = aposta;
    }
    
    public boolean equals(String nom)
    {
        if(this.nom.equals(nom))
            return true;
        else 
            return false;
    }
    
    public String toString()
    {
        return this.getNom() + ": " + this.getAposta(); 
    }
    
}
