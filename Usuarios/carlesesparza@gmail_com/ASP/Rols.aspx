<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Rols.aspx.cs" Inherits="Rols" %>
<%@ OutputCache Duration="172800" VaryByControl="GVrols" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:Panel ID="PanelRols" runat="server">
        <header>
            <span>Rols</span>
        </header>
        <asp:Panel ID="PanelLlistaRols" runat="server" CssClass="panelsLlistaRolUnRol">
            <asp:ImageButton ID="IBaddUser" runat="server" ImageUrl="~/Imatges/add_user.png" OnClick="IBaddUser_Click" CausesValidation="False" />
            <asp:Label ID="LmisAddUser" runat="server" CssClass="mis"></asp:Label>
            <br />
            <br />
            <asp:GridView ID="GVrols" runat="server" AutoGenerateColumns="False" OnRowDeleting="GVrols_RowDeleting" OnSelectedIndexChanging="GVrols_SelectedIndexChanging"></asp:GridView>
        </asp:Panel>
        <asp:Panel ID="PanelUnRol" runat="server" CssClass="panelsLlistaRolUnRol">
            <header>
                <asp:Label ID="Ltitol" Text="Titol" runat="server" />
            </header>
            <asp:Label ID="Lrol" runat="server" Text="Rol" CssClass="etiquetes"></asp:Label>
            <asp:TextBox ID="TBrol" runat="server" CssClass="text"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Has d'escriure un rol" ControlToValidate="TBrol" CssClass="mis"></asp:RequiredFieldValidator>
            <br />
            <asp:Panel ID="PanelEsq" runat="server" CssClass="panelsEsqDretBotonsAgr">
                <header>
                    <span>Usu. Asignats</span>
                </header>
                <asp:ListBox ID="LBusuAsig" runat="server" CssClass="listBox" SelectionMode="Multiple"></asp:ListBox>
            </asp:Panel>
            <asp:Panel ID="PanelBotonsAgregar" runat="server" CssClass="panelsEsqDretBotonsAgr">
                <asp:Button ID="Bder" runat="server" Text=">>" CausesValidation="False" CssClass="botons" OnClick="Bder_Click" />
                <br />
                <asp:Button ID="Bizq" runat="server" Text="<<" CausesValidation="False" CssClass="botons" OnClick="Bizq_Click" />
            </asp:Panel>
            <asp:Panel ID="PanelDreta" runat="server" CssClass="panelsEsqDretBotonsAgr">
                <header>
                    <span>Usu. Posibles</span>
                </header>
                <asp:ListBox ID="LBusuPos" runat="server" CssClass="listBox" SelectionMode="Multiple"></asp:ListBox>
            </asp:Panel>
            <asp:Panel ID="PanelBotons" runat="server" CssClass="panelBotons">
                <asp:ImageButton ID="IBaccept" runat="server" ImageUrl="~/Imatges/accept_48.png" OnClick="IBaccept_Click" />
                <asp:ImageButton ID="IBcancel" runat="server" CausesValidation="False" ImageUrl="~/Imatges/cancel_48.png" OnClick="IBcancel_Click" />
                <asp:Label ID="LmisRol" runat="server" CssClass="mis"></asp:Label>
            </asp:Panel>
        </asp:Panel>
    </asp:Panel>
</asp:Content>

