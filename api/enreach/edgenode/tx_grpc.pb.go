// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: enreach/edgenode/tx.proto

package edgenode

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Msg_UpdateParams_FullMethodName               = "/enreach.edgenode.Msg/UpdateParams"
	Msg_CreateUser_FullMethodName                 = "/enreach.edgenode.Msg/CreateUser"
	Msg_BindUserEVMAccount_FullMethodName         = "/enreach.edgenode.Msg/BindUserEVMAccount"
	Msg_RegisterNode_FullMethodName               = "/enreach.edgenode.Msg/RegisterNode"
	Msg_BindAndActivateNode_FullMethodName        = "/enreach.edgenode.Msg/BindAndActivateNode"
	Msg_UnbindNode_FullMethodName                 = "/enreach.edgenode.Msg/UnbindNode"
	Msg_CreateSuperior_FullMethodName             = "/enreach.edgenode.Msg/CreateSuperior"
	Msg_UpdateSuperior_FullMethodName             = "/enreach.edgenode.Msg/UpdateSuperior"
	Msg_UpdateNodeTrafficTypeBatch_FullMethodName = "/enreach.edgenode.Msg/UpdateNodeTrafficTypeBatch"
)

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MsgClient interface {
	// UpdateParams defines a (governance) operation for updating the module
	// parameters. The authority defaults to the x/gov module account.
	UpdateParams(ctx context.Context, in *MsgUpdateParams, opts ...grpc.CallOption) (*MsgUpdateParamsResponse, error)
	CreateUser(ctx context.Context, in *MsgCreateUser, opts ...grpc.CallOption) (*MsgCreateUserResponse, error)
	BindUserEVMAccount(ctx context.Context, in *MsgBindUserEVMAccount, opts ...grpc.CallOption) (*MsgBindUserEVMAccountResponse, error)
	RegisterNode(ctx context.Context, in *MsgRegisterNode, opts ...grpc.CallOption) (*MsgRegisterNodeResponse, error)
	BindAndActivateNode(ctx context.Context, in *MsgBindAndActivateNode, opts ...grpc.CallOption) (*MsgBindAndActivateNodeResponse, error)
	UnbindNode(ctx context.Context, in *MsgUnbindNode, opts ...grpc.CallOption) (*MsgUnbindNodeResponse, error)
	CreateSuperior(ctx context.Context, in *MsgCreateSuperior, opts ...grpc.CallOption) (*MsgCreateSuperiorResponse, error)
	UpdateSuperior(ctx context.Context, in *MsgUpdateSuperior, opts ...grpc.CallOption) (*MsgUpdateSuperiorResponse, error)
	UpdateNodeTrafficTypeBatch(ctx context.Context, in *MsgUpdateNodeTrafficTypeBatch, opts ...grpc.CallOption) (*MsgUpdateNodeTrafficTypeBatchResponse, error)
}

type msgClient struct {
	cc grpc.ClientConnInterface
}

func NewMsgClient(cc grpc.ClientConnInterface) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) UpdateParams(ctx context.Context, in *MsgUpdateParams, opts ...grpc.CallOption) (*MsgUpdateParamsResponse, error) {
	out := new(MsgUpdateParamsResponse)
	err := c.cc.Invoke(ctx, Msg_UpdateParams_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) CreateUser(ctx context.Context, in *MsgCreateUser, opts ...grpc.CallOption) (*MsgCreateUserResponse, error) {
	out := new(MsgCreateUserResponse)
	err := c.cc.Invoke(ctx, Msg_CreateUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) BindUserEVMAccount(ctx context.Context, in *MsgBindUserEVMAccount, opts ...grpc.CallOption) (*MsgBindUserEVMAccountResponse, error) {
	out := new(MsgBindUserEVMAccountResponse)
	err := c.cc.Invoke(ctx, Msg_BindUserEVMAccount_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) RegisterNode(ctx context.Context, in *MsgRegisterNode, opts ...grpc.CallOption) (*MsgRegisterNodeResponse, error) {
	out := new(MsgRegisterNodeResponse)
	err := c.cc.Invoke(ctx, Msg_RegisterNode_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) BindAndActivateNode(ctx context.Context, in *MsgBindAndActivateNode, opts ...grpc.CallOption) (*MsgBindAndActivateNodeResponse, error) {
	out := new(MsgBindAndActivateNodeResponse)
	err := c.cc.Invoke(ctx, Msg_BindAndActivateNode_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) UnbindNode(ctx context.Context, in *MsgUnbindNode, opts ...grpc.CallOption) (*MsgUnbindNodeResponse, error) {
	out := new(MsgUnbindNodeResponse)
	err := c.cc.Invoke(ctx, Msg_UnbindNode_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) CreateSuperior(ctx context.Context, in *MsgCreateSuperior, opts ...grpc.CallOption) (*MsgCreateSuperiorResponse, error) {
	out := new(MsgCreateSuperiorResponse)
	err := c.cc.Invoke(ctx, Msg_CreateSuperior_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) UpdateSuperior(ctx context.Context, in *MsgUpdateSuperior, opts ...grpc.CallOption) (*MsgUpdateSuperiorResponse, error) {
	out := new(MsgUpdateSuperiorResponse)
	err := c.cc.Invoke(ctx, Msg_UpdateSuperior_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) UpdateNodeTrafficTypeBatch(ctx context.Context, in *MsgUpdateNodeTrafficTypeBatch, opts ...grpc.CallOption) (*MsgUpdateNodeTrafficTypeBatchResponse, error) {
	out := new(MsgUpdateNodeTrafficTypeBatchResponse)
	err := c.cc.Invoke(ctx, Msg_UpdateNodeTrafficTypeBatch_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
// All implementations must embed UnimplementedMsgServer
// for forward compatibility
type MsgServer interface {
	// UpdateParams defines a (governance) operation for updating the module
	// parameters. The authority defaults to the x/gov module account.
	UpdateParams(context.Context, *MsgUpdateParams) (*MsgUpdateParamsResponse, error)
	CreateUser(context.Context, *MsgCreateUser) (*MsgCreateUserResponse, error)
	BindUserEVMAccount(context.Context, *MsgBindUserEVMAccount) (*MsgBindUserEVMAccountResponse, error)
	RegisterNode(context.Context, *MsgRegisterNode) (*MsgRegisterNodeResponse, error)
	BindAndActivateNode(context.Context, *MsgBindAndActivateNode) (*MsgBindAndActivateNodeResponse, error)
	UnbindNode(context.Context, *MsgUnbindNode) (*MsgUnbindNodeResponse, error)
	CreateSuperior(context.Context, *MsgCreateSuperior) (*MsgCreateSuperiorResponse, error)
	UpdateSuperior(context.Context, *MsgUpdateSuperior) (*MsgUpdateSuperiorResponse, error)
	UpdateNodeTrafficTypeBatch(context.Context, *MsgUpdateNodeTrafficTypeBatch) (*MsgUpdateNodeTrafficTypeBatchResponse, error)
	mustEmbedUnimplementedMsgServer()
}

// UnimplementedMsgServer must be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (UnimplementedMsgServer) UpdateParams(context.Context, *MsgUpdateParams) (*MsgUpdateParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateParams not implemented")
}
func (UnimplementedMsgServer) CreateUser(context.Context, *MsgCreateUser) (*MsgCreateUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateUser not implemented")
}
func (UnimplementedMsgServer) BindUserEVMAccount(context.Context, *MsgBindUserEVMAccount) (*MsgBindUserEVMAccountResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BindUserEVMAccount not implemented")
}
func (UnimplementedMsgServer) RegisterNode(context.Context, *MsgRegisterNode) (*MsgRegisterNodeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RegisterNode not implemented")
}
func (UnimplementedMsgServer) BindAndActivateNode(context.Context, *MsgBindAndActivateNode) (*MsgBindAndActivateNodeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BindAndActivateNode not implemented")
}
func (UnimplementedMsgServer) UnbindNode(context.Context, *MsgUnbindNode) (*MsgUnbindNodeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UnbindNode not implemented")
}
func (UnimplementedMsgServer) CreateSuperior(context.Context, *MsgCreateSuperior) (*MsgCreateSuperiorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSuperior not implemented")
}
func (UnimplementedMsgServer) UpdateSuperior(context.Context, *MsgUpdateSuperior) (*MsgUpdateSuperiorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateSuperior not implemented")
}
func (UnimplementedMsgServer) UpdateNodeTrafficTypeBatch(context.Context, *MsgUpdateNodeTrafficTypeBatch) (*MsgUpdateNodeTrafficTypeBatchResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateNodeTrafficTypeBatch not implemented")
}
func (UnimplementedMsgServer) mustEmbedUnimplementedMsgServer() {}

// UnsafeMsgServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MsgServer will
// result in compilation errors.
type UnsafeMsgServer interface {
	mustEmbedUnimplementedMsgServer()
}

func RegisterMsgServer(s grpc.ServiceRegistrar, srv MsgServer) {
	s.RegisterService(&Msg_ServiceDesc, srv)
}

func _Msg_UpdateParams_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgUpdateParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).UpdateParams(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_UpdateParams_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).UpdateParams(ctx, req.(*MsgUpdateParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_CreateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCreateUser)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CreateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_CreateUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CreateUser(ctx, req.(*MsgCreateUser))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_BindUserEVMAccount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgBindUserEVMAccount)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).BindUserEVMAccount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_BindUserEVMAccount_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).BindUserEVMAccount(ctx, req.(*MsgBindUserEVMAccount))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_RegisterNode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgRegisterNode)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).RegisterNode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_RegisterNode_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).RegisterNode(ctx, req.(*MsgRegisterNode))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_BindAndActivateNode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgBindAndActivateNode)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).BindAndActivateNode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_BindAndActivateNode_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).BindAndActivateNode(ctx, req.(*MsgBindAndActivateNode))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_UnbindNode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgUnbindNode)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).UnbindNode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_UnbindNode_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).UnbindNode(ctx, req.(*MsgUnbindNode))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_CreateSuperior_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCreateSuperior)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CreateSuperior(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_CreateSuperior_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CreateSuperior(ctx, req.(*MsgCreateSuperior))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_UpdateSuperior_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgUpdateSuperior)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).UpdateSuperior(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_UpdateSuperior_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).UpdateSuperior(ctx, req.(*MsgUpdateSuperior))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_UpdateNodeTrafficTypeBatch_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgUpdateNodeTrafficTypeBatch)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).UpdateNodeTrafficTypeBatch(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_UpdateNodeTrafficTypeBatch_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).UpdateNodeTrafficTypeBatch(ctx, req.(*MsgUpdateNodeTrafficTypeBatch))
	}
	return interceptor(ctx, in, info, handler)
}

// Msg_ServiceDesc is the grpc.ServiceDesc for Msg service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Msg_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "enreach.edgenode.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UpdateParams",
			Handler:    _Msg_UpdateParams_Handler,
		},
		{
			MethodName: "CreateUser",
			Handler:    _Msg_CreateUser_Handler,
		},
		{
			MethodName: "BindUserEVMAccount",
			Handler:    _Msg_BindUserEVMAccount_Handler,
		},
		{
			MethodName: "RegisterNode",
			Handler:    _Msg_RegisterNode_Handler,
		},
		{
			MethodName: "BindAndActivateNode",
			Handler:    _Msg_BindAndActivateNode_Handler,
		},
		{
			MethodName: "UnbindNode",
			Handler:    _Msg_UnbindNode_Handler,
		},
		{
			MethodName: "CreateSuperior",
			Handler:    _Msg_CreateSuperior_Handler,
		},
		{
			MethodName: "UpdateSuperior",
			Handler:    _Msg_UpdateSuperior_Handler,
		},
		{
			MethodName: "UpdateNodeTrafficTypeBatch",
			Handler:    _Msg_UpdateNodeTrafficTypeBatch_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "enreach/edgenode/tx.proto",
}
