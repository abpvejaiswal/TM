﻿<%@ Page Title="" Language="C#" MasterPageFile="~/tm-admin/AdminMaster.Master" AutoEventWireup="true" CodeBehind="ViewProfile.aspx.cs" Inherits="TaskManager.tm_admin.ViewProfile" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section id="content">
        <div class="container">

            <div class="block-header">
                <h2>My Details <%--<small>Web/UI Developer, Dubai, United Arab Emirates</small>--%></h2>
            </div>

            <div class="card" id="profile-main">

                <div class="pm-body clearfix" style="padding-left: 0px;">





                    <div class="pmb-block">
                        <div class="pmbb-header">
                            <h2><i class="zmdi zmdi-account m-r-5"></i>Basic Information</h2>

                            <ul class="actions">
                                <li class="dropdown">
                                    <a href="#" data-toggle="dropdown">
                                        <i class="zmdi zmdi-more-vert"></i>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li>
                                            <a data-pmb-action="edit" href="#">Edit</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="pmbb-body p-l-30">
                            <div class="pmbb-view">
                                <dl class="dl-horizontal">
                                    <dt>Full Name</dt>
                                    <dd>Mallinda Hollaway</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Gender</dt>
                                    <dd>Female</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Birthday</dt>
                                    <dd>June 23, 1990</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Martial Status</dt>
                                    <dd>Single</dd>
                                </dl>
                            </div>

                            <div class="pmbb-edit">
                                <dl class="dl-horizontal">
                                    <dt class="p-t-10">Full Name</dt>
                                    <dd>
                                        <div class="fg-line">
                                            <input type="text" class="form-control" placeholder="eg. Mallinda Hollaway">
                                        </div>

                                    </dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt class="p-t-10">Gender</dt>
                                    <dd>
                                        <div class="fg-line">
                                            <select class="form-control">
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt class="p-t-10">Birthday</dt>
                                    <dd>
                                        <div class="dtp-container dropdown fg-line">
                                            <input type='text' class="form-control date-picker" data-toggle="dropdown" placeholder="Click here...">
                                        </div>
                                    </dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt class="p-t-10">Martial Status</dt>
                                    <dd>
                                        <div class="fg-line">
                                            <select class="form-control">
                                                <option>Single</option>
                                                <option>Married</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </dd>
                                </dl>

                                <div class="m-t-30">
                                    <button class="btn btn-primary btn-sm">Save</button>
                                    <button data-pmb-action="reset" class="btn btn-link btn-sm">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="pmb-block">
                        <div class="pmbb-header">
                            <h2><i class="zmdi zmdi-phone m-r-5"></i>Contact Information</h2>

                            <ul class="actions">
                                <li class="dropdown">
                                    <a href="#" data-toggle="dropdown">
                                        <i class="zmdi zmdi-more-vert"></i>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li>
                                            <a data-pmb-action="edit" href="#">Edit</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="pmbb-body p-l-30">
                            <div class="pmbb-view">
                                <dl class="dl-horizontal">
                                    <dt>Mobile Phone</dt>
                                    <dd>00971 12345678 9</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Email Address</dt>
                                    <dd>malinda.h@gmail.com</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Twitter</dt>
                                    <dd>@malinda</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Skype</dt>
                                    <dd>malinda.hollaway</dd>
                                </dl>
                            </div>

                            <div class="pmbb-edit">
                                <dl class="dl-horizontal">
                                    <dt class="p-t-10">Mobile Phone</dt>
                                    <dd>
                                        <div class="fg-line">
                                            <input type="text" class="form-control" placeholder="eg. 00971 12345678 9">
                                        </div>
                                    </dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt class="p-t-10">Email Address</dt>
                                    <dd>
                                        <div class="fg-line">
                                            <input type="email" class="form-control" placeholder="eg. malinda.h@gmail.com">
                                        </div>
                                    </dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt class="p-t-10">Twitter</dt>
                                    <dd>
                                        <div class="fg-line">
                                            <input type="text" class="form-control" placeholder="eg. @malinda">
                                        </div>
                                    </dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt class="p-t-10">Skype</dt>
                                    <dd>
                                        <div class="fg-line">
                                            <input type="text" class="form-control" placeholder="eg. malinda.hollaway">
                                        </div>
                                    </dd>
                                </dl>

                                <div class="m-t-30">
                                    <button class="btn btn-primary btn-sm">Save</button>
                                    <button data-pmb-action="reset" class="btn btn-link btn-sm">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</asp:Content>
