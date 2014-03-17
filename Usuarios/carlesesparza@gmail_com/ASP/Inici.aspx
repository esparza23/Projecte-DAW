<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Inici.aspx.cs" Inherits="Inici" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="Estils/usuaris.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:Panel ID="Plogin" runat="server" CssClass="Plogin">
            <header>
                <span>Identifiació de l'usuari</span>
            </header>
            <asp:Label ID="Lusuari" runat="server" Text="Usuari" CssClass="etiquetes"></asp:Label>
            <asp:TextBox ID="TBusuari" runat="server" CssClass="text"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RFVus" runat="server" ControlToValidate="TBusuari" CssClass="mis" ErrorMessage="Usuari necessari"></asp:RequiredFieldValidator>
            <br />
            <asp:Label ID="Lpass" runat="server" Text="Password" CssClass="etiquetes"></asp:Label>
            <asp:TextBox ID="TBpass" runat="server" CssClass="text" TextMode="Password"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RFVpass" runat="server" ControlToValidate="TBpass" CssClass="mis" ErrorMessage="Password necessari"></asp:RequiredFieldValidator>
            <br />
            <br />
            <asp:ImageButton ID="IBentrar" runat="server" ImageUrl="~/Imatges/login_32.png" OnClick="IBentrar_Click" />
            <asp:Label ID="Lmis" runat="server" CssClass="mis"></asp:Label>
        </asp:Panel>
    </div>
    </form>
</body>
</html>
