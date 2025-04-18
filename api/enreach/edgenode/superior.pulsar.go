// Code generated by protoc-gen-go-pulsar. DO NOT EDIT.
package edgenode

import (
	fmt "fmt"
	runtime "github.com/cosmos/cosmos-proto/runtime"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoiface "google.golang.org/protobuf/runtime/protoiface"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	io "io"
	reflect "reflect"
	sync "sync"
)

var (
	md_Superior          protoreflect.MessageDescriptor
	fd_Superior_account  protoreflect.FieldDescriptor
	fd_Superior_creator  protoreflect.FieldDescriptor
	fd_Superior_createAt protoreflect.FieldDescriptor
	fd_Superior_updator  protoreflect.FieldDescriptor
	fd_Superior_updateAt protoreflect.FieldDescriptor
)

func init() {
	file_enreach_edgenode_superior_proto_init()
	md_Superior = File_enreach_edgenode_superior_proto.Messages().ByName("Superior")
	fd_Superior_account = md_Superior.Fields().ByName("account")
	fd_Superior_creator = md_Superior.Fields().ByName("creator")
	fd_Superior_createAt = md_Superior.Fields().ByName("createAt")
	fd_Superior_updator = md_Superior.Fields().ByName("updator")
	fd_Superior_updateAt = md_Superior.Fields().ByName("updateAt")
}

var _ protoreflect.Message = (*fastReflection_Superior)(nil)

type fastReflection_Superior Superior

func (x *Superior) ProtoReflect() protoreflect.Message {
	return (*fastReflection_Superior)(x)
}

func (x *Superior) slowProtoReflect() protoreflect.Message {
	mi := &file_enreach_edgenode_superior_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

var _fastReflection_Superior_messageType fastReflection_Superior_messageType
var _ protoreflect.MessageType = fastReflection_Superior_messageType{}

type fastReflection_Superior_messageType struct{}

func (x fastReflection_Superior_messageType) Zero() protoreflect.Message {
	return (*fastReflection_Superior)(nil)
}
func (x fastReflection_Superior_messageType) New() protoreflect.Message {
	return new(fastReflection_Superior)
}
func (x fastReflection_Superior_messageType) Descriptor() protoreflect.MessageDescriptor {
	return md_Superior
}

// Descriptor returns message descriptor, which contains only the protobuf
// type information for the message.
func (x *fastReflection_Superior) Descriptor() protoreflect.MessageDescriptor {
	return md_Superior
}

// Type returns the message type, which encapsulates both Go and protobuf
// type information. If the Go type information is not needed,
// it is recommended that the message descriptor be used instead.
func (x *fastReflection_Superior) Type() protoreflect.MessageType {
	return _fastReflection_Superior_messageType
}

// New returns a newly allocated and mutable empty message.
func (x *fastReflection_Superior) New() protoreflect.Message {
	return new(fastReflection_Superior)
}

// Interface unwraps the message reflection interface and
// returns the underlying ProtoMessage interface.
func (x *fastReflection_Superior) Interface() protoreflect.ProtoMessage {
	return (*Superior)(x)
}

// Range iterates over every populated field in an undefined order,
// calling f for each field descriptor and value encountered.
// Range returns immediately if f returns false.
// While iterating, mutating operations may only be performed
// on the current field descriptor.
func (x *fastReflection_Superior) Range(f func(protoreflect.FieldDescriptor, protoreflect.Value) bool) {
	if x.Account != "" {
		value := protoreflect.ValueOfString(x.Account)
		if !f(fd_Superior_account, value) {
			return
		}
	}
	if x.Creator != "" {
		value := protoreflect.ValueOfString(x.Creator)
		if !f(fd_Superior_creator, value) {
			return
		}
	}
	if x.CreateAt != uint64(0) {
		value := protoreflect.ValueOfUint64(x.CreateAt)
		if !f(fd_Superior_createAt, value) {
			return
		}
	}
	if x.Updator != "" {
		value := protoreflect.ValueOfString(x.Updator)
		if !f(fd_Superior_updator, value) {
			return
		}
	}
	if x.UpdateAt != uint64(0) {
		value := protoreflect.ValueOfUint64(x.UpdateAt)
		if !f(fd_Superior_updateAt, value) {
			return
		}
	}
}

// Has reports whether a field is populated.
//
// Some fields have the property of nullability where it is possible to
// distinguish between the default value of a field and whether the field
// was explicitly populated with the default value. Singular message fields,
// member fields of a oneof, and proto2 scalar fields are nullable. Such
// fields are populated only if explicitly set.
//
// In other cases (aside from the nullable cases above),
// a proto3 scalar field is populated if it contains a non-zero value, and
// a repeated field is populated if it is non-empty.
func (x *fastReflection_Superior) Has(fd protoreflect.FieldDescriptor) bool {
	switch fd.FullName() {
	case "enreach.edgenode.Superior.account":
		return x.Account != ""
	case "enreach.edgenode.Superior.creator":
		return x.Creator != ""
	case "enreach.edgenode.Superior.createAt":
		return x.CreateAt != uint64(0)
	case "enreach.edgenode.Superior.updator":
		return x.Updator != ""
	case "enreach.edgenode.Superior.updateAt":
		return x.UpdateAt != uint64(0)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.edgenode.Superior"))
		}
		panic(fmt.Errorf("message enreach.edgenode.Superior does not contain field %s", fd.FullName()))
	}
}

// Clear clears the field such that a subsequent Has call reports false.
//
// Clearing an extension field clears both the extension type and value
// associated with the given field number.
//
// Clear is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Superior) Clear(fd protoreflect.FieldDescriptor) {
	switch fd.FullName() {
	case "enreach.edgenode.Superior.account":
		x.Account = ""
	case "enreach.edgenode.Superior.creator":
		x.Creator = ""
	case "enreach.edgenode.Superior.createAt":
		x.CreateAt = uint64(0)
	case "enreach.edgenode.Superior.updator":
		x.Updator = ""
	case "enreach.edgenode.Superior.updateAt":
		x.UpdateAt = uint64(0)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.edgenode.Superior"))
		}
		panic(fmt.Errorf("message enreach.edgenode.Superior does not contain field %s", fd.FullName()))
	}
}

// Get retrieves the value for a field.
//
// For unpopulated scalars, it returns the default value, where
// the default value of a bytes scalar is guaranteed to be a copy.
// For unpopulated composite types, it returns an empty, read-only view
// of the value; to obtain a mutable reference, use Mutable.
func (x *fastReflection_Superior) Get(descriptor protoreflect.FieldDescriptor) protoreflect.Value {
	switch descriptor.FullName() {
	case "enreach.edgenode.Superior.account":
		value := x.Account
		return protoreflect.ValueOfString(value)
	case "enreach.edgenode.Superior.creator":
		value := x.Creator
		return protoreflect.ValueOfString(value)
	case "enreach.edgenode.Superior.createAt":
		value := x.CreateAt
		return protoreflect.ValueOfUint64(value)
	case "enreach.edgenode.Superior.updator":
		value := x.Updator
		return protoreflect.ValueOfString(value)
	case "enreach.edgenode.Superior.updateAt":
		value := x.UpdateAt
		return protoreflect.ValueOfUint64(value)
	default:
		if descriptor.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.edgenode.Superior"))
		}
		panic(fmt.Errorf("message enreach.edgenode.Superior does not contain field %s", descriptor.FullName()))
	}
}

// Set stores the value for a field.
//
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType.
// When setting a composite type, it is unspecified whether the stored value
// aliases the source's memory in any way. If the composite value is an
// empty, read-only value, then it panics.
//
// Set is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Superior) Set(fd protoreflect.FieldDescriptor, value protoreflect.Value) {
	switch fd.FullName() {
	case "enreach.edgenode.Superior.account":
		x.Account = value.Interface().(string)
	case "enreach.edgenode.Superior.creator":
		x.Creator = value.Interface().(string)
	case "enreach.edgenode.Superior.createAt":
		x.CreateAt = value.Uint()
	case "enreach.edgenode.Superior.updator":
		x.Updator = value.Interface().(string)
	case "enreach.edgenode.Superior.updateAt":
		x.UpdateAt = value.Uint()
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.edgenode.Superior"))
		}
		panic(fmt.Errorf("message enreach.edgenode.Superior does not contain field %s", fd.FullName()))
	}
}

// Mutable returns a mutable reference to a composite type.
//
// If the field is unpopulated, it may allocate a composite value.
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType
// if not already stored.
// It panics if the field does not contain a composite type.
//
// Mutable is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Superior) Mutable(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "enreach.edgenode.Superior.account":
		panic(fmt.Errorf("field account of message enreach.edgenode.Superior is not mutable"))
	case "enreach.edgenode.Superior.creator":
		panic(fmt.Errorf("field creator of message enreach.edgenode.Superior is not mutable"))
	case "enreach.edgenode.Superior.createAt":
		panic(fmt.Errorf("field createAt of message enreach.edgenode.Superior is not mutable"))
	case "enreach.edgenode.Superior.updator":
		panic(fmt.Errorf("field updator of message enreach.edgenode.Superior is not mutable"))
	case "enreach.edgenode.Superior.updateAt":
		panic(fmt.Errorf("field updateAt of message enreach.edgenode.Superior is not mutable"))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.edgenode.Superior"))
		}
		panic(fmt.Errorf("message enreach.edgenode.Superior does not contain field %s", fd.FullName()))
	}
}

// NewField returns a new value that is assignable to the field
// for the given descriptor. For scalars, this returns the default value.
// For lists, maps, and messages, this returns a new, empty, mutable value.
func (x *fastReflection_Superior) NewField(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "enreach.edgenode.Superior.account":
		return protoreflect.ValueOfString("")
	case "enreach.edgenode.Superior.creator":
		return protoreflect.ValueOfString("")
	case "enreach.edgenode.Superior.createAt":
		return protoreflect.ValueOfUint64(uint64(0))
	case "enreach.edgenode.Superior.updator":
		return protoreflect.ValueOfString("")
	case "enreach.edgenode.Superior.updateAt":
		return protoreflect.ValueOfUint64(uint64(0))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.edgenode.Superior"))
		}
		panic(fmt.Errorf("message enreach.edgenode.Superior does not contain field %s", fd.FullName()))
	}
}

// WhichOneof reports which field within the oneof is populated,
// returning nil if none are populated.
// It panics if the oneof descriptor does not belong to this message.
func (x *fastReflection_Superior) WhichOneof(d protoreflect.OneofDescriptor) protoreflect.FieldDescriptor {
	switch d.FullName() {
	default:
		panic(fmt.Errorf("%s is not a oneof field in enreach.edgenode.Superior", d.FullName()))
	}
	panic("unreachable")
}

// GetUnknown retrieves the entire list of unknown fields.
// The caller may only mutate the contents of the RawFields
// if the mutated bytes are stored back into the message with SetUnknown.
func (x *fastReflection_Superior) GetUnknown() protoreflect.RawFields {
	return x.unknownFields
}

// SetUnknown stores an entire list of unknown fields.
// The raw fields must be syntactically valid according to the wire format.
// An implementation may panic if this is not the case.
// Once stored, the caller must not mutate the content of the RawFields.
// An empty RawFields may be passed to clear the fields.
//
// SetUnknown is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Superior) SetUnknown(fields protoreflect.RawFields) {
	x.unknownFields = fields
}

// IsValid reports whether the message is valid.
//
// An invalid message is an empty, read-only value.
//
// An invalid message often corresponds to a nil pointer of the concrete
// message type, but the details are implementation dependent.
// Validity is not part of the protobuf data model, and may not
// be preserved in marshaling or other operations.
func (x *fastReflection_Superior) IsValid() bool {
	return x != nil
}

// ProtoMethods returns optional fastReflectionFeature-path implementations of various operations.
// This method may return nil.
//
// The returned methods type is identical to
// "google.golang.org/protobuf/runtime/protoiface".Methods.
// Consult the protoiface package documentation for details.
func (x *fastReflection_Superior) ProtoMethods() *protoiface.Methods {
	size := func(input protoiface.SizeInput) protoiface.SizeOutput {
		x := input.Message.Interface().(*Superior)
		if x == nil {
			return protoiface.SizeOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Size:              0,
			}
		}
		options := runtime.SizeInputToOptions(input)
		_ = options
		var n int
		var l int
		_ = l
		l = len(x.Account)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		l = len(x.Creator)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.CreateAt != 0 {
			n += 1 + runtime.Sov(uint64(x.CreateAt))
		}
		l = len(x.Updator)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.UpdateAt != 0 {
			n += 1 + runtime.Sov(uint64(x.UpdateAt))
		}
		if x.unknownFields != nil {
			n += len(x.unknownFields)
		}
		return protoiface.SizeOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Size:              n,
		}
	}

	marshal := func(input protoiface.MarshalInput) (protoiface.MarshalOutput, error) {
		x := input.Message.Interface().(*Superior)
		if x == nil {
			return protoiface.MarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Buf:               input.Buf,
			}, nil
		}
		options := runtime.MarshalInputToOptions(input)
		_ = options
		size := options.Size(x)
		dAtA := make([]byte, size)
		i := len(dAtA)
		_ = i
		var l int
		_ = l
		if x.unknownFields != nil {
			i -= len(x.unknownFields)
			copy(dAtA[i:], x.unknownFields)
		}
		if x.UpdateAt != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.UpdateAt))
			i--
			dAtA[i] = 0x28
		}
		if len(x.Updator) > 0 {
			i -= len(x.Updator)
			copy(dAtA[i:], x.Updator)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.Updator)))
			i--
			dAtA[i] = 0x22
		}
		if x.CreateAt != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.CreateAt))
			i--
			dAtA[i] = 0x18
		}
		if len(x.Creator) > 0 {
			i -= len(x.Creator)
			copy(dAtA[i:], x.Creator)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.Creator)))
			i--
			dAtA[i] = 0x12
		}
		if len(x.Account) > 0 {
			i -= len(x.Account)
			copy(dAtA[i:], x.Account)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.Account)))
			i--
			dAtA[i] = 0xa
		}
		if input.Buf != nil {
			input.Buf = append(input.Buf, dAtA...)
		} else {
			input.Buf = dAtA
		}
		return protoiface.MarshalOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Buf:               input.Buf,
		}, nil
	}
	unmarshal := func(input protoiface.UnmarshalInput) (protoiface.UnmarshalOutput, error) {
		x := input.Message.Interface().(*Superior)
		if x == nil {
			return protoiface.UnmarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Flags:             input.Flags,
			}, nil
		}
		options := runtime.UnmarshalInputToOptions(input)
		_ = options
		dAtA := input.Buf
		l := len(dAtA)
		iNdEx := 0
		for iNdEx < l {
			preIndex := iNdEx
			var wire uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
				}
				if iNdEx >= l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				wire |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			fieldNum := int32(wire >> 3)
			wireType := int(wire & 0x7)
			if wireType == 4 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: Superior: wiretype end group for non-group")
			}
			if fieldNum <= 0 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: Superior: illegal tag %d (wire type %d)", fieldNum, wire)
			}
			switch fieldNum {
			case 1:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Account", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.Account = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			case 2:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.Creator = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			case 3:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field CreateAt", wireType)
				}
				x.CreateAt = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.CreateAt |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			case 4:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Updator", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.Updator = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			case 5:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field UpdateAt", wireType)
				}
				x.UpdateAt = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.UpdateAt |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			default:
				iNdEx = preIndex
				skippy, err := runtime.Skip(dAtA[iNdEx:])
				if err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				if (skippy < 0) || (iNdEx+skippy) < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if (iNdEx + skippy) > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if !options.DiscardUnknown {
					x.unknownFields = append(x.unknownFields, dAtA[iNdEx:iNdEx+skippy]...)
				}
				iNdEx += skippy
			}
		}

		if iNdEx > l {
			return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
		}
		return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, nil
	}
	return &protoiface.Methods{
		NoUnkeyedLiterals: struct{}{},
		Flags:             protoiface.SupportMarshalDeterministic | protoiface.SupportUnmarshalDiscardUnknown,
		Size:              size,
		Marshal:           marshal,
		Unmarshal:         unmarshal,
		Merge:             nil,
		CheckInitialized:  nil,
	}
}

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.0
// 	protoc        (unknown)
// source: enreach/edgenode/superior.proto

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Superior struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Account  string `protobuf:"bytes,1,opt,name=account,proto3" json:"account,omitempty"`
	Creator  string `protobuf:"bytes,2,opt,name=creator,proto3" json:"creator,omitempty"`
	CreateAt uint64 `protobuf:"varint,3,opt,name=createAt,proto3" json:"createAt,omitempty"`
	Updator  string `protobuf:"bytes,4,opt,name=updator,proto3" json:"updator,omitempty"`
	UpdateAt uint64 `protobuf:"varint,5,opt,name=updateAt,proto3" json:"updateAt,omitempty"`
}

func (x *Superior) Reset() {
	*x = Superior{}
	if protoimpl.UnsafeEnabled {
		mi := &file_enreach_edgenode_superior_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Superior) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Superior) ProtoMessage() {}

// Deprecated: Use Superior.ProtoReflect.Descriptor instead.
func (*Superior) Descriptor() ([]byte, []int) {
	return file_enreach_edgenode_superior_proto_rawDescGZIP(), []int{0}
}

func (x *Superior) GetAccount() string {
	if x != nil {
		return x.Account
	}
	return ""
}

func (x *Superior) GetCreator() string {
	if x != nil {
		return x.Creator
	}
	return ""
}

func (x *Superior) GetCreateAt() uint64 {
	if x != nil {
		return x.CreateAt
	}
	return 0
}

func (x *Superior) GetUpdator() string {
	if x != nil {
		return x.Updator
	}
	return ""
}

func (x *Superior) GetUpdateAt() uint64 {
	if x != nil {
		return x.UpdateAt
	}
	return 0
}

var File_enreach_edgenode_superior_proto protoreflect.FileDescriptor

var file_enreach_edgenode_superior_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x65, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x2f, 0x65, 0x64, 0x67, 0x65, 0x6e, 0x6f,
	0x64, 0x65, 0x2f, 0x73, 0x75, 0x70, 0x65, 0x72, 0x69, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x10, 0x65, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x2e, 0x65, 0x64, 0x67, 0x65, 0x6e,
	0x6f, 0x64, 0x65, 0x22, 0x90, 0x01, 0x0a, 0x08, 0x53, 0x75, 0x70, 0x65, 0x72, 0x69, 0x6f, 0x72,
	0x12, 0x18, 0x0a, 0x07, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x6f, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x6f, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x74,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x08, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x74,
	0x12, 0x18, 0x0a, 0x07, 0x75, 0x70, 0x64, 0x61, 0x74, 0x6f, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x75, 0x70, 0x64, 0x61, 0x74, 0x6f, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x41, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x04, 0x52, 0x08, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x41, 0x74, 0x42, 0xa9, 0x01, 0x0a, 0x14, 0x63, 0x6f, 0x6d, 0x2e, 0x65,
	0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x2e, 0x65, 0x64, 0x67, 0x65, 0x6e, 0x6f, 0x64, 0x65, 0x42,
	0x0d, 0x53, 0x75, 0x70, 0x65, 0x72, 0x69, 0x6f, 0x72, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01,
	0x5a, 0x21, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x73, 0x64, 0x6b, 0x2e, 0x69, 0x6f, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x65, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x2f, 0x65, 0x64, 0x67, 0x65, 0x6e,
	0x6f, 0x64, 0x65, 0xa2, 0x02, 0x03, 0x45, 0x45, 0x58, 0xaa, 0x02, 0x10, 0x45, 0x6e, 0x72, 0x65,
	0x61, 0x63, 0x68, 0x2e, 0x45, 0x64, 0x67, 0x65, 0x6e, 0x6f, 0x64, 0x65, 0xca, 0x02, 0x10, 0x45,
	0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x5c, 0x45, 0x64, 0x67, 0x65, 0x6e, 0x6f, 0x64, 0x65, 0xe2,
	0x02, 0x1c, 0x45, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x5c, 0x45, 0x64, 0x67, 0x65, 0x6e, 0x6f,
	0x64, 0x65, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02,
	0x11, 0x45, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x3a, 0x3a, 0x45, 0x64, 0x67, 0x65, 0x6e, 0x6f,
	0x64, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_enreach_edgenode_superior_proto_rawDescOnce sync.Once
	file_enreach_edgenode_superior_proto_rawDescData = file_enreach_edgenode_superior_proto_rawDesc
)

func file_enreach_edgenode_superior_proto_rawDescGZIP() []byte {
	file_enreach_edgenode_superior_proto_rawDescOnce.Do(func() {
		file_enreach_edgenode_superior_proto_rawDescData = protoimpl.X.CompressGZIP(file_enreach_edgenode_superior_proto_rawDescData)
	})
	return file_enreach_edgenode_superior_proto_rawDescData
}

var file_enreach_edgenode_superior_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_enreach_edgenode_superior_proto_goTypes = []interface{}{
	(*Superior)(nil), // 0: enreach.edgenode.Superior
}
var file_enreach_edgenode_superior_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_enreach_edgenode_superior_proto_init() }
func file_enreach_edgenode_superior_proto_init() {
	if File_enreach_edgenode_superior_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_enreach_edgenode_superior_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Superior); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_enreach_edgenode_superior_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_enreach_edgenode_superior_proto_goTypes,
		DependencyIndexes: file_enreach_edgenode_superior_proto_depIdxs,
		MessageInfos:      file_enreach_edgenode_superior_proto_msgTypes,
	}.Build()
	File_enreach_edgenode_superior_proto = out.File
	file_enreach_edgenode_superior_proto_rawDesc = nil
	file_enreach_edgenode_superior_proto_goTypes = nil
	file_enreach_edgenode_superior_proto_depIdxs = nil
}
