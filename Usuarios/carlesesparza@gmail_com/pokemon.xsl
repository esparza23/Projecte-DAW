<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:fn="http://www.w3.org/2005/xpath-functions">


	<xsl:template match="/">
		<html  xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>
					<xsl:value-of select="region/nombre"/>
				</title>
				<link rel="stylesheet" type="text/css" href="estils/pokemon.css"/>
			</head>
			<body>
				<div id="tot">
					<div id="capsalera">
						<div id="logo">
							<a href="index.html"> <img alt="wikidex" src="imatges/Wiki-wordmark.png"/> </a>
						</div>
					</div>
					<div id="menu">
						<ul>
							<li><a href="kanto.html">Familias de Kanto</a></li>
							<li><a href="jhoto.html">Familias de Jhoto</a></li>
							<li><a href="hoenn.html">Familias de Hoenn</a></li>
						</ul>
					</div>
					<div id="dades">
						<table class="taula">
							<tr class="taula_cap">
								<td colspan="2" class="fa">Menor</td>
								<td>Desencadenante</td>
								<td colspan="2" class="fa">Medio</td>
								<td>Desencadenante</td>
								<td colspan="2" class="fa">Mayor</td>
								<xsl:for-each select="region/pokemons/familia">
									<xsl:apply-templates select="."/>
								</xsl:for-each>
							</tr>
						</table>
					</div>
				</div>			
			</body>
		</html>
	</xsl:template>

	<xsl:template match="familia">
		<tr class="fila">
			<xsl:for-each select="pokemon">
				<xsl:apply-templates select="."/>
			</xsl:for-each>
		</tr>
	</xsl:template>

	<xsl:template match="pokemon">
		<td>
			<img alt="pokemon" >
				<xsl:attribute name="src">
					<xsl:value-of select="imagen"/>
				</xsl:attribute>
			</img>
		</td>
		<td>
			<xsl:value-of select="nombre"/>
		</td>
		<xsl:if test="nivel>0">
				<td>
					<xsl:value-of select="nivel"/> 
				</td>
		</xsl:if>
	</xsl:template>
	
</xsl:stylesheet>
