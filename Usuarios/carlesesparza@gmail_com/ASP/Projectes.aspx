<%@ Page Title="Projectes" Language="C#" MasterPageFile="~/Plantilla.master" AutoEventWireup="true" CodeFile="Projectes.aspx.cs" Inherits="Projectes" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolderMenu" Runat="Server">
    <asp:ImageButton ID="IBnew" runat="server" ImageUrl="~/img/new.png" ToolTip="Nou Projecte" OnClick="IBnew_Click" />
    <asp:ImageButton ID="IBdelete" runat="server" ImageUrl="~/img/delete.png" ToolTip="Esborrar Projecte" OnClick="IBdelete_Click" />
    <div></div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolderPrincipal" Runat="Server">
    <asp:EntityDataSource ID="EDScalendaris" runat="server" ConnectionString="name=gestio_projecteEntities" DefaultContainerName="gestio_projecteEntities" EnableFlattening="False" EntitySetName="calendaris"></asp:EntityDataSource>
    <asp:Panel ID="PanelProjecte" runat="server" CssClass="panelsPrinc">
        <header class="headPanel ">Projecte</header>
        <section>
            <asp:Label ID="Lnom" runat="server" Text="Nom" CssClass="label"></asp:Label>
            <asp:TextBox ID="TBnom" runat="server" CssClass="caixesText"></asp:TextBox><asp:RequiredFieldValidator ID="RFVnom" runat="server" ErrorMessage="El nom es obligatori" ControlToValidate="TBnom" CssClass="labelErr"></asp:RequiredFieldValidator>

            <br />

            <asp:Label ID="LDinici" runat="server" Text="Data Inici" CssClass="label"></asp:Label>
            <asp:Calendar ID="Cinici" runat="server" CssClass="calendar">
                <DayStyle CssClass="calendarDay" />
                <SelectedDayStyle CssClass="seleccionatDia" />
                <TitleStyle CssClass="calCaps" />
            </asp:Calendar>

            <asp:Label ID="LDlimit" runat="server" Text="Data Límit" CssClass="label"></asp:Label>
            <asp:ImageButton ID="IBcanLimit" runat="server" ImageUrl="~/img/cancel2.png" CausesValidation="False" OnClick="IBcanLimit_Click" />
            <asp:Calendar ID="Climit" runat="server" CssClass="calendar">
                <DayStyle CssClass="calendarDay" />
                <SelectedDayStyle CssClass="seleccionatDia" />
                <TitleStyle CssClass="calCaps" />
            </asp:Calendar>

            <br />

            <asp:Label ID="Lcalendari" runat="server" Text="Calendari" CssClass="label"></asp:Label>
            <br />
            <asp:DropDownList ID="DDLcalendari" runat="server" DataSourceID="EDScalendaris" DataTextField="nom_calendari" DataValueField="id_calendari" CssClass="caixesText"></asp:DropDownList>

            <br />

            <asp:ImageButton ID="IBaccept" runat="server" ImageUrl="~/img/accept.png" OnClick="IBaccept_Click" />
            <asp:ImageButton ID="IBcancel" runat="server" ImageUrl="~/img/close.png" CausesValidation="False" OnClick="IBcancel_Click" />
            <br />
            <asp:Label ID="Lmis" runat="server" CssClass="labelErr"></asp:Label>

        </section>
    </asp:Panel>
    <asp:Panel ID="PanelGridProjectes" runat="server"  CssClass="panelsPrinc">
        <asp:EntityDataSource ID="EDSprojectes" runat="server" ConnectionString="name=gestio_projecteEntities" DefaultContainerName="gestio_projecteEntities" EnableDelete="True" EnableFlattening="False" EnableInsert="True" EnableUpdate="True" EntitySetName="projectes" Include="calendaris"></asp:EntityDataSource>
        <asp:GridView ID="GVproj" runat="server" AllowSorting="True" AutoGenerateColumns="False" DataKeyNames="id_projecte" DataSourceID="EDSprojectes" CssClass="grid" OnRowDeleted="GVproj_RowDeleted" OnRowUpdated="GVproj_RowUpdated" OnSelectedIndexChanged="GVproj_SelectedIndexChanged">
            <Columns>
                <asp:CommandField ButtonType="Image" CancelImageUrl="~/img/close.png" DeleteImageUrl="~/img/delete.png" EditImageUrl="~/img/pen_blue.png" SelectImageUrl="~/img/edit_select_all.png" ShowDeleteButton="True" ShowEditButton="True" ShowSelectButton="True" UpdateImageUrl="~/img/accept.png" CausesValidation="False" >
                <ItemStyle CssClass="gridBut" />
                </asp:CommandField>
                <asp:BoundField DataField="id_projecte" HeaderText="id_projecte" ReadOnly="True" SortExpression="id_projecte" Visible="False" />
                <asp:TemplateField HeaderText="Nom" SortExpression="nom_projecte">
                    <EditItemTemplate>
                        <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("nom_projecte") %>' CssClass="gridCaix"></asp:TextBox>
                    </EditItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label1" runat="server" Text='<%# Bind("nom_projecte") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Data Inici" SortExpression="data_inici_projecte">
                    <EditItemTemplate>
                        <asp:Calendar ID="Calendar1" runat="server" SelectedDate='<%# Bind("data_inici_projecte") %>' VisibleDate='<%# Eval("data_inici_projecte") %>' CssClass="calendar">
                            <DayStyle CssClass="calendarDay" />
                            <SelectedDayStyle CssClass="seleccionatDia" />
                            <TitleStyle CssClass="calCaps" />
                        </asp:Calendar>
                    </EditItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label2" runat="server" Text='<%# Eval("data_inici_projecte", "{0:d}") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Data Limit" SortExpression="data_limit_projecte">
                    <EditItemTemplate>
                        <asp:Calendar ID="Calendar2" runat="server" CssClass="calendar" OnSelectionChanged="Calendar2_SelectionChanged">
                            <DayStyle CssClass="calendarDay" />
                            <SelectedDayStyle CssClass="seleccionatDia" />
                            <TitleStyle CssClass="calCaps" />
                        </asp:Calendar>
                        <asp:TextBox ID="TextBox5" runat="server" Enabled="False" Text='<%# Bind("data_limit_projecte", "{0:d}") %>'></asp:TextBox>
                        <asp:ImageButton ID="ImageButton1" runat="server" ImageUrl="~/img/cancel2.png" OnClick="ImageButton1_Click" />
                    </EditItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label3" runat="server" Text='<%# Bind("data_limit_projecte", "{0:d}") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Calendari" SortExpression="id_calendari">
                    <EditItemTemplate>
                        <asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="EDScalendaris" DataTextField="nom_calendari" DataValueField="id_calendari" SelectedValue='<%# Bind("id_calendari") %>'>
                        </asp:DropDownList>
                    </EditItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label4" runat="server" Text='<%# Eval("calendaris.nom_calendari") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
            </Columns>
            <EditRowStyle CssClass="editItem " />
            <HeaderStyle CssClass="gridCaps" />
            <RowStyle CssClass="item" />
            <SelectedRowStyle CssClass="selectedItem" />
        </asp:GridView>
        <asp:Label ID="LmisGrid" runat="server" CssClass="labelErr"></asp:Label>
    </asp:Panel>
</asp:Content>

